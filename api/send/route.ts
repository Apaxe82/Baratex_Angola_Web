// app/api/send/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nome, telefone, email, praga, mensagem } = await request.json();

    const data = await resend.emails.send({
      from: 'Baratex Site <onboarding@resend.dev>', // Depois poderá usar o seu domínio próprio
      to: ['baratexangola@gmail.com'], // O SEU E-MAIL ONDE QUER RECEBER
      subject: `Novo Pedido de Orçamento: ${nome}`,
      html: `
        <h1>Novo contacto via Website</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Tipo de Praga:</strong> ${praga}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
