import { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensagem muito curta (mínimo 10 caracteres)"),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = contactFormSchema.parse(req.body);

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["pedrobasto.dev@gmail.com"],
      subject: `Novo Contato do Portfólio: ${name}`,
      replyTo: email,
      text: `
        Nome: ${name}
        Email: ${email}
        Mensagem: 
        ${message}
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues });
    }

    console.error("Erro ao enviar email:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
