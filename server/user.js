const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ "List of users": ["adrior", "ternos"] });
});

module.exports = router;
