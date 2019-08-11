const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const upload = require("multer")({ dest: "uploads/" });
const knex = require("knex")(require("../knexfile.js"));

// Compression
const compression = require("compression");
app.use(compression());

// Sessions
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const KnexSession = new KnexSessionStore({ knex });
app.use(
  session({
    secret: "julia--00k88#%-aadfr92940",
    cookie: { maxAge: 50 * 365 * 24 * 60 * 60 * 1000 },
    store: KnexSession
  })
);

// Users
const userRouter = require("./user.js");
app.use("/users/", userRouter);

// Posts
const postRouter = require("./post.js");
app.use("/posts/", postRouter);

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

console.clear();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
