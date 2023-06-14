const router = require("express").Router();

router.get('/user', (req, res) => {
    res.send("User test successful");
})

module.exports = router;