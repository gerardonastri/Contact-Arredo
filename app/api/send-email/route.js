import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Configura il trasporto SMTP
const transporter = nodemailer.createTransport({
  service: "gmail", // Puoi usare Gmail o altri provider SMTP
  auth: {
    user: process.env.EMAIL_USER, // Email
    pass: process.env.EMAIL_PASS, // Password
  },
  debug: true, // Abilita i log del trasporto
  logger: true,
});

// Handler per il metodo POST
export async function POST(req) {
  try {
    const { name, email, message } = await req.json(); // Leggi il body della richiesta

    // Configura l'email
    const mailOptions = {
      from: email || "noreply@example.com", // Mittente
      to: "gerardonastri06@gmail.com", // Destinatario (mettere contact arredo)
      subject: `Nuovo messaggio da ${name || "Anonimo"}`, // Oggetto
      text: `Messaggio: ${message}\nEmail: ${email || "Non fornita"}`, // Contenuto
    };

    // Invia l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email inviata con successo." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Errore nell'invio:", error);
    return NextResponse.json(
      { success: false, error: "Errore durante l'invio dell'email." },
      { status: 500 }
    );
  }
}

// Handler per il metodo GET (opzionale)
export async function GET() {
  return NextResponse.json(
    { message: "Utilizza il metodo POST per inviare un messaggio." },
    { status: 200 }
  );
}
