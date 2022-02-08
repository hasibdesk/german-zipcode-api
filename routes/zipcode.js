const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/zipcodes', (req, res) => {
	var zipcodes = JSON.parse(fs.readFileSync('postcode.json', 'utf8'));
	let uniqueZipcodes = [...new Map(zipcodes.map((item) => [item['zipcode'], item])).values()];
	console.log(uniqueZipcodes.length);
	res.status(200).json(uniqueZipcodes);
});

module.exports = router;
