const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const session = require("express-session");
const upload = require("multer")({ dest: "uploads/" });

const compression = require("compression");
app.use(compression());

const knex = require("knex")(require("../knexfile.js"));
const KnexSessionStore = require("connect-session-knex")(session);
const KnexSession = new KnexSessionStore({ knex });

app.use(
  session({
    secret: "julia--00k88#%-aadfr92940",
    cookie: { maxAge: 50 * 365 * 24 * 60 * 60 * 1000 },
    store: KnexSession
  })
);

app.post("/submit", upload.single("homework"), (req, res, next) => {
  console.log(req.file);
  console.log(req.body.name);
  res.send("Uploaded");
});

app.get("/api/", (req, res) => {
  var n = req.session.views || 0;
  req.session.views = n + 1;
  res.json({ views: req.session.views });
});

app.use(express.static("public"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
