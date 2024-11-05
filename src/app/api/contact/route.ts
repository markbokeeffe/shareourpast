import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export async function POST(request: { formData: () => any; }) {
    try {
        const formData = await request.formData();
        const name = formData.get('name')
        const email = formData.get('email')
        const country = formData.get('country')
        const message = formData.get('message')

        const mailOptionsToSOP = {
            from: user,
            to: user,
            subject: "Share Our History - Start Your Journey Form Submission",
            text: `Name: ${name}\n\nEmail: ${email}\n\nCountry: ${country}\n\nMessage: ${message}`,
        };

        const mailOptionsToUser = {
            from: user,
            to: email,
            subject: "Share Our History - Thank You For Contacting Us",
            text: `Dear ${name},\n\nThank you for contacting us regarding your digital storybook.  We will assess this and respond to you within two working days.\n\nKind regards,\n\nThe Team at Share Our History`,
        };

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


        await new Promise((resolve,reject)=>{
          transporter.sendMail(mailOptionsToSOP, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }    
            })
        });

        await new Promise((resolve,reject)=>{
            transporter.sendMail(mailOptionsToUser, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }    
        })
    });


    return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 },
          );
    } catch (error) {
        console.log(error);
      return new NextResponse("Failed to send email.", { status: 500 })
    }
}