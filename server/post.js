const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ Posts: ["Danger", "Dragonfly"] });
});

module.exports = router;
