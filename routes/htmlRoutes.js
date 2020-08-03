// Create all the routes to display pages (View)

    // You will need html routes to display the following pages:
        // - index.html ( "/" )
        // - exercise.html ( "/exercise" )
        // - stats.html ( "/stats" )

const router = require("express").Router();
const path = require("path");


router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
router.get("/exercise", (req, res) => res.sendFile(path.join(__dirname, "../public/exercise.html")));
router.get("/stats", (req, res) => res.sendFile(path.join(__dirname, "../public/stats.html")));

module.exports = router;