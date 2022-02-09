const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/zipcodes', (req, res) => {
	var zipcodes = JSON.parse(fs.readFileSync('postcode.json', 'utf8'));
	let uniqueZipcodes = [...new Map(zipcodes.map((item) => [item['zipcode'], item])).values()];
	console.log(uniqueZipcodes.length);
	res.status(200).json(uniqueZipcodes);
});
router.get('/zipcodes/:zipcode', (req, res) => {
	var zipcodes = JSON.parse(fs.readFileSync('postcode.json', 'utf8'));
	let uniqueZipcodes = [...new Map(zipcodes.map((item) => [item['zipcode'], item])).values()];

	const zipcode = uniqueZipcodes.find((code) => code.zipcode === req.params.zipcode);

	if (!zipcode) return res.status(404).json({ success: false, message: 'Zipcode not found' });

	res.status(200).json(zipcode);
});

module.exports = router;
