const router = require("express").Router();
const knex = require("knex")(require("../knexfile.js"));
const upload = require("multer")({ dest: "uploads/" });

const createUser = (data, next) => {
  // Using trx as a query builder:
  knex
    .transaction(function(trx) {
      return trx
        .insert({ username: data.username, display_name: data.display_name })
        .into("user");
    })
    .then(function(inserts) {
      next({ messenge: "User added", error: null });
    })
    .catch(function(error) {
      next({ error: error });
      console.error(error);
    });
};

router
  .route("/")
  .get((req, res) => {
    res.json({
      "List of users": ["adrior", "ternos"],
      views: req.session.views
    });
  })
  .post(upload.single("userpic"), (req, res) => {
    createUser(
      {
        username: req.body.username,
        display_name: req.body.display_name,
        fileType: req.file.mimetype
      },
      data => {
        res.json(data);
      }
    );
  });

module.exports = router;
