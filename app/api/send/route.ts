import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Inicialização segura da API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Validação básica dos dados recebidos
    const body = await request.json();
    const { nome, telefone, email, praga, mensagem } = body;

    if (!nome || !telefone || !mensagem) {
      return NextResponse.json(
        { error: 'Campos obrigatórios em falta.' },
        { status: 400 }
      );
    }

    // 2. Envio do e-mail com o novo e-mail da Baratex
    // NOTA: Enquanto não validar o seu domínio no Resend, 
    // o campo 'from' deve continuar como 'onboarding@resend.dev'
    const data = await resend.emails.send({
      from: 'Baratex Website <onboarding@resend.dev>',
      to: ['baratexangola@gmail.com'], // Atualizado conforme o seu pedido
      replyTo: email, // Permite que responda ao cliente apenas clicando em "Responder" no Gmail
      subject: `🦟 Orçamento: ${nome} - ${praga || 'Geral'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #333;">
          <h2 style="color: #2D5A27; border-bottom: 2px solid #2D5A27; padding-bottom: 10px;">
            Novo Pedido de Orçamento - Baratex Angola
          </h2>
          <p style="font-size: 16px;">Recebeu um novo contacto através do site:</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; width: 30%;">Nome:</td>
              <td style="padding: 10px;">${nome}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Telefone:</td>
              <td style="padding: 10px;">
                <a href="tel:${telefone}">${telefone}</a> 
                | 
                <a href="https://wa.me/244${telefone.replace(/\s/g, '')}" style="color: #25D366;">WhatsApp</a>
              </td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">E-mail:</td>
              <td style="padding: 10px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Praga:</td>
              <td style="padding: 10px; text-transform: capitalize;">${praga}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #eaf2e9; border-radius: 8px;">
            <h4 style="margin-top: 0; color: #1e3d1a;">Mensagem do Cliente:</h4>
            <p style="font-style: italic; white-space: pre-wrap;">"${mensagem}"</p>
          </div>

          <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center;">
            Este e-mail foi gerado automaticamente pelo site Baratex Angola.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error: any) {
    console.error("Erro na API de e-mail:", error);
    return NextResponse.json(
      { error: error.message || 'Erro interno ao enviar e-mail.' },
      { status: 500 }
    );
  }
}
