const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const apiRouter = require("./routes/api");
const User = require("./app/models/User");
const nodemailer = require("nodemailer");
// require("dotenv").config();


const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const db = require("./config/db/index");

db.connect();

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));



app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);



// function sendEmail({ recipient_email, OTP }) {
//   return new Promise((resolve, reject) => {
//     var transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.MY_EMAIL,
//         pass: process.env.MY_PASSWORD,
//       },
//     });

//     const mail_configs = {
//       from: process.env.MY_EMAIL,
//       to: recipient_email,
//       subject: "KODING 101 PASSWORD RECOVERY",
//       html: `<!DOCTYPE html>
//             <html lang="en" >
//             <head>
//               <meta charset="UTF-8">
//               <title>CodePen - OTP Email Template</title>
//             </head>
//             <body>
//             <!-- partial:index.partial.html -->
//             <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
//               <div style="margin:50px auto;width:70%;padding:20px 0">
//                 <div style="border-bottom:1px solid #eee">
//                   <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Koding 101</a>
//                 </div>
//                 <p style="font-size:1.1em">Hi,</p>
//                 <p>Thank you for choosing Koding 101. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
//                 <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
//                 <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
//                 <hr style="border:none;border-top:1px solid #eee" />
//                 <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
//                   <p>Koding 101 Inc</p>
//                   <p>1600 Amphitheatre Parkway</p>
//                   <p>California</p>
//                 </div>
//               </div>
//             </div>
//             <!-- partial -->
              
//             </body>
//             </html>`,
//     };
//     transporter.sendMail(mail_configs, function (error, info) {
//       if (error) {
//         console.log(error);
//         return reject({ message: `An error has occured` });
//       }
//       return resolve({ message: "Email sent succesfuly" });
//     });
//   });
// }

// // app.get("/", (req, res) => {
// //   console.log(process.env.MY_EMAIL);
// // });

// app.post("/send_recovery_email", (req, res) => {
//   sendEmail(req.body)
//     .then((response) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
// });




// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
