// 发送短信消息
function sendSMS(accountSid, authToken, from, to, body) {
  const client = new twilio(accountSid, authToken);
  client.messages
      .create({
          body,
          from,
          to
      })
      .then(message => console.log('SMS message sent:', message.sid))
      .catch(error => console.error('Error sending SMS message:', error));
}

// 生成二维码图片
function generateQRCode(text, options) {
  return qr.imageSync(text, options);
}