var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
/* GET home page. */

router.get('/', function(req, res, next) {
  console.log('bichlien.27062002@gmail.com');
});
function sendEmail({ recipient_email, OTP }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'bichlien.27062002@gmail.com',
        pass: 'ygfbeznakirwoktj', //lấy từ email tạo ứng dụng mật khẩu => smtp
      },
    });

    const mail_configs = {
      from: 'bichlien.27062002@gmail.com',
      to: recipient_email,
      subject: "DOCEASE PASSWORD RECOVERY",
      html: `<!DOCTYPE html>
            <html lang="en" >
            <head>
              <meta charset="UTF-8">
              <title>CodePen - OTP Email Template</title>
            </head>
            <body>
            <!-- partial:index.partial.html -->
            <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
              <div style="margin:50px auto;width:70%;padding:20px 0">
                <div style="border-bottom:1px solid #eee">
                  <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">DOCEASE</a>
                </div>
                <p style="font-size:1.1em">Hi,</p>
                <p>Thank you for choosing DOCEASE. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
                <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
                <p style="font-size:0.9em;">Regards,<br />DOCEASE</p>
                <hr style="border:none;border-top:1px solid #eee" />
                <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                  <p>DOCEASE Inc</p>
                  <p>Khu do thi FPT, Hoa Hai, Ngu Hanh Son</p>
                  <p>DaNang</p>
                </div>
              </div>
            </div>
            <!-- partial -->
            </body>
            </html>`,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: "Email sent succesfuly" });
    });
  });
}


router.post("/send_recovery_email", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

module.exports = router;
