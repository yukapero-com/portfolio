const appRoot = require('app-root-path');
const Moment = require('moment');
const express = require('express');
const router = express.Router();
const Config = require('config');
const nodemailer = require('nodemailer');
const logger = require(appRoot + '/lib/logger.js');
const contactLogger = logger.getLogger('contact');

router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/health_check', function(req, res, next) {
  res.render('health_check', {});
});

router.post('/contact', function(req, res, next) {
  var q = req.body;
  var title = `【お問い合わせ】ポートフォリオ経由 ${new Moment().format('YYYY-MM-DD HH:mm')}`;
  var reply = q.reply;
  var text = q.text + `\n\n返信先: ${reply}`;

  var receiverEmailAddress = Config['contact']['receiver_email_address'];
  var senderEmailAddress = Config['contact']['sender_gmail_address'];
  var senderEmailPassword = Config['contact']['sender_gmail_password'];

  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
      user: senderEmailAddress,
      pass: senderEmailPassword
    }
  });
  var mailOptions1 = {
    from: senderEmailAddress,
    to: receiverEmailAddress,
    subject: title,
    text: text,
  };
  transporter.sendMail(mailOptions1, function (error, info) {
    if (error) {
      contactLogger.error(error);
      return;
    } else {
      contactLogger.info(`
      sentTo: ${receiverEmailAddress}
      title: ${title}
      reply: ${reply}
      text: ${text}      
      `)
    }
  });

  res.send('ok');
});

module.exports = router;
