import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export async function POST(request: { formData: () => any; }) {


    try {
        const formData = await request.formData();
        const name = formData.get('name')
        const email = formData.get('email')
        const message = formData.get('message')

        const mailOptions = {
            from: user,
            to: user,
            subject: "Share Your Past - Start Your Journey Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
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

        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });

        await new Promise((resolve,reject)=>{


    //       transporter.sendMail(mailOptions, (err, info) => {
    //         if (err) {
    //             console.error(err);
    //             reject(err);
    //         } else {
    //             console.log(info);
    //             resolve(info);
    //         }    
    //   })


      transporter.sendMail(mailOptions);

        //   await new Promise((resolve, reject) => {
        //     // verify connection configuration
        //     transporter.verify(function (error, success) {
        //         if (error) {
        //             console.log(error);
        //             reject(error);
        //         } else {
        //             console.log("Server is ready to take our messages");
        //             resolve(success);
        //         }
        //     });
        // });



        //   await new Promise((resolve, reject) => {
        //     // send mail
        //     transporter.sendMail(mailOptions, (err, info) => {
        //         if (err) {
        //             console.error(err);
        //             reject(err);
        //         } else {
        //             console.log(info);
        //             resolve(info);
        //         }    
        //   })
            // transporter.sendMail(mailData, (err, info) => {
            //     if (err) {
            //         console.error(err);
            //         reject(err);
            //     } else {
            //         console.log(info);
            //         resolve(info);
            //     }
            // });
        });
    
        //   await transporter.sendMail(mailOptions);

    return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 },
          );
    } catch (error) {
        console.log(error);
      return new NextResponse("Failed to send email.", { status: 500 })
    }
}