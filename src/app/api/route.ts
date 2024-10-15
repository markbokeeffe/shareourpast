import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');

export async function POST(request: any) {

    const myEmail = "mark.okeeffe@gmail.com"


    console.log("dealing with request")
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('information');


        // create transporter object
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
    
                user: process.env.NEXT_PUBLIC_MAIL_USER,
                pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
            }
        });


        try {

            const mail = await transporter.sendMail({
                from: name,
                to: myEmail,
                replyTo: email,
                subject: `Website activity from ${email}`,
                html: `
                <p>Name: ${name} </p>
                <p>Email: ${email} </p>
                <p>Message: ${message} </p>
                `,
            })
            return NextResponse.json({ message: "Success: email was sent" })
    
        } catch (error) {
            console.log("AH WELL", error)
            // NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
        }
    
    return NextResponse.json({
        hello: myEmail
    })
}


// import { sendEmail } from "@/utils/mail.utils"

// export async function POST(request: Request) {
//     console.log("POSTING", request);
//     const sender = {
//         name: 'My App',
//         address: 'no-reply@example.com'
//     }

//     const recipients = [{
//         name: 'Mark',
//         address: 'mark.okeeffe@vechain.org'
//     }]
//     console.log("BODY", request)

//     // try {
//     //     const result = await sendEmail({
//     //         sender,
//     //         recipients,
//     //         subject: 'Welcome',
//     //         message: 'Test'
//     //     })
//     //     console.log('RES', result);
//     //     return Response.json({
//     //         accepted: result.accepted
//     //     })
//     // } catch (error) {
//     //     console.log(error);
//     //     return Response.json({ message: 'Unable to send email this time'}, {
//     //         status: 500
//     //     })
//     // }
// }