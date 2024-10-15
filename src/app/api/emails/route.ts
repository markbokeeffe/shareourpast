import { sendEmail } from "@/utils/mail.utils"

export async function POST() {
    console.log("POSTING");
    const sender = {
        name: 'My App',
        address: 'no-reply@example.com'
    }

    const recipients = [{
        name: 'Mark',
        address: 'mark.okeeffe@vechain.org'
    }]

    try {
        const result = await sendEmail({
            sender,
            recipients,
            subject: 'Welcome',
            message: 'Test'
        })
        console.log('RES', result);
        return Response.json({
            accepted: result.accepted
        })
    } catch () {
        return Response.json({ message: 'Uabnable to send email this time'}, {
            status: 500
        })
    }
}