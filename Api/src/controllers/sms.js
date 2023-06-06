const { Vonage } = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: "f3be7afe",
  apiSecret: "WeBfVKlaisZZoC24",
});

const from = "573225775766";

module.exports = async ({ telefono, nombre }) => {
  const text = `Hola ${nombre} te hablamos desde Barberia DC, estás en turno`;
  const to = `57${telefono}`;
  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log("Message sent successfully");
      // console.log(resp);
    })
    .catch((err) => {
      console.log("There was an error sending the messages.");
      // console.error(err);
    });
};
