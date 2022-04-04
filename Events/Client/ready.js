const mongoose = require("mongoose");
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
  },
};
