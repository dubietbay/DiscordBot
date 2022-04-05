const mongoose = require("mongoose");
const Remind = require("../../Schema/remind")
module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log("The client is now ready!");
    client.user.setActivity("London is DanTDM");

    if (!process.env.DATABASE) return;
    mongoose
      .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to Database!");
      })
      .catch((err) => {
        console.log(err);
      });

    const interval = setInterval(async () => {
      for await (const doc of Remind.find()) {
        console.log(doc.Time)
        console.log(Date.now())
        if (Date.now() > doc.Time) {
          await Remind.findByIdAndDelete(doc._id);
          await client.users.cache.get(doc.User).send(`Wake the 🤬 up samurai! We have `+doc.Region+` to burn.. \n https://media.discordapp.net/attachments/744248081398366288/816514189811777577/reface-2021-03-03-10-33-52.gif`)
            .catch((e) => console.log(e));
          //clearInterval(interval);
        }
      }
    }, 2000);
  },
};
