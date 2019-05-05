const path = require('path');
const rootDir = require('../helpers/path');

const express = require('express');
const router = express.Router();
const adminData = require('../routes/admin');

router.get('/', (req, res, next) => {
    const products = adminData.products;

    // Send html file (can be used with Angular)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;