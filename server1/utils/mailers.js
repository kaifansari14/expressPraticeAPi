
import nodemailer from "nodemailer";
// async function mails(from,pwt,to,subject,text) {
//     try {
//         let email = process.env.EMAIL;
//         let pwds = pwds
//         let 
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg: error})
//     }
// }



async function sendMail(to, subject) {
  const transporter = nodemailer.createTransport({
    from: "suhail@code.in",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  await transporter.sendMail( {
    from: "khajakaifansari@gmail.com",
    to: [to],
    subject,
    text:"Hello This is mail"
  })

console.log(`EMAIL SENT`);
}
export default nodemailer;
