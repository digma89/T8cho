
 
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://taller8cho%40gmail.com:taller8cho1@smtp.gmail.com');
 
/**inputName
 * inputEmail
 * inputSubject
 * inputMessage
 * Send an email when the contact from is submitted
 */
exports.sendMail = function(req, res) {
    var data = req.body

var mailOptions = {
        from: data.inputName,
        to: 'contacto@taller8cho.com',
        subject: 'Message from ' + data.inputName +' Subject: ' +data.inputSubject,
        text:'Message from ' + data.inputName +'\n Subject: ' +data.inputSubject + '\n Email: ' +data.inputEmail +'\n Message: ' +data.inputMessage
    };
    
    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
 
 res.json(data);

};