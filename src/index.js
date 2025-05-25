const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.log("Mongodb connected at", config.mongoose.url);
});

app.listen(config.port, () => {
  console.log(`App is running at PORT ${config.port}`);
});
