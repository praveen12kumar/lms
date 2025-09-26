import ejs from 'ejs';
import nodemailer from 'nodemailer';
import path from 'path';

import { MAIL_ID, MAIL_PASSWORD } from './serverConfig.js';


export const transport = nodemailer.createTransport({
    service:'Gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: MAIL_ID,
      pass: MAIL_PASSWORD
    },
});

const renderEmailTemplate = async(template, data) => {
    const templatePath = path.join(
        process.cwd(),  // return current working directory
        "auth-service",
        'src',
        'email-templates',
        `${template}.ejs`
    
    );

    return ejs.renderFile(templatePath, data);
}

// send an email using nodemailer

export const sendEmail = async(to, subject, template, data)=>{
    try {
        const html = await renderEmailTemplate(template, data);
        await transport.sendMail({
            from: MAIL_ID,
            to,
            subject,
            html
        });

        return true;
    } catch (error) {
        console.log("Error sending email", error);
        return false;
    }
}