"use strict";

const got = require("got");
const escapeHtml = require("escape-html");

async function sendMessage(data) {
  const message = encodeURIComponent(
    `From: ${escapeHtml(data.name)} ${escapeHtml(data.email)}: ${escapeHtml(
      data.message
    )}`
  );

  return await got(
    `https://api.telegram.org/bot${process.env.TELEGRAM_API_KEY}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${message}`
  );
}

module.exports.sendMessage = (event, context, callback) => {
  const data = JSON.parse(event.body);

  sendMessage(data)
    .then(() => {
      let response = {
        statusCode: 201,
        headers: {
          "Access-Control-Allow-Origin": "*" // Required for CORS support to work
        },
        body: JSON.stringify({
          message: "Message sent successfully.",
          input: event
        })
      };
      callback(null, response);
    })
    .catch(() => {
      let response = {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          message: "Error sending message!"
        })
      };
      callback(null, response);
    });
};
