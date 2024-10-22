import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: "forwardemail",
            host: "smtp.forwardemail.net",
            port: 587,
            secure: true,
            auth: {
              user,
              pass,
            },
          });

          const mailOptions = {
            from: user,
            to: "mark.okeeffe@gmail.com",
            subject: "New message from your-website",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          };

          await transporter.sendMail(mailOptions);

          return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 },
          );
    } catch (error) {
      return new NextResponse("Failed to send message.", { status: 500 })
    }
}