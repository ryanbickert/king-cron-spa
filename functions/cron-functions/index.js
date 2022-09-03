const express = require('express');
const app = express();

app.post('/hi', express.json(), async (req, res) => {
	console.log("hello");
});