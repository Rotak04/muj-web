import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, service, message } = await request.json();

    const response = await resend.emails.send({
      from: 'RotCode Kontakt <onboarding@resend.dev>',
      to: ['rotcode@outlook.cz'],
      subject: `Nová poptávka: ${service} - ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Nová zpráva z webu RotCode</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Jméno a příjmení:</strong> ${name}</p>
          <p><strong>E-mail zákazníka:</strong> ${email}</p>
          <p><strong>Poptávaná služba:</strong> ${service}</p>
          <br />
          <p><strong>Zpráva:</strong></p>
          <blockquote style="background: #f9f9f9; border-left: 4px solid #2563eb; padding: 10px 15px; margin: 0;">
            ${message}
          </blockquote>
        </div>
      `,
    });

    if (response.error) {
      return Response.json({ success: false, error: response.error.message }, { status: 400 });
    }

    return Response.json({ success: true, data: response.data });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}