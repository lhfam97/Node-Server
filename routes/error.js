const express = require('express');
const rootDir = require('../util/path');

const path = require('path');

const router = express.Router();

router.use((req, res, next) => {
    console.log("Middleware erro");
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
});

module.exports = router;





