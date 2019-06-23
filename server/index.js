const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const email = require("./app/email/router");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config

nextApp.prepare().then(() => {
  // express code here
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api/email", email);

  app.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });

  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Starting up at http://localhost:${PORT}`);
  });
});
