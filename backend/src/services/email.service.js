import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables from .env file
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'genieslides@gmail.com',
        pass: console.log('MAIL_PASSKEY:', process.env.MAIL_PASSKEY)
,
    },
});

const sendGreetingEmail = async (to, subject, text) => {
    const mailOptions = {
        from: 'genieslides@gmail.com',
        to: to,
        subject: subject,
        text: text,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

export { sendGreetingEmail };

// Example usage
sendGreetingEmail('dakshsharmaoffical@gmail.com', 'Welcome!', 'Hello and welcome! We are glad to have you with us.')
    .then(info => console.log('Email sent:', info))
    .catch(error => console.error('Error:', error));
