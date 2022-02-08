const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/zipcodes', (req, res) => {
	var zipcodes = JSON.parse(fs.readFileSync('zipcode.json', 'utf8'));
	res.status(200).json(zipcodes);
});

module.exports = router;
