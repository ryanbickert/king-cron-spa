console.log("running");

const express = require('express');
const app = express();

function textlog()
{
	console.log("pls")
}

textlog();

app.post('/hi', express.json(), async (req, res) => {
	//const playerName = req.body.playerName;
	//const score = req.body.score;
	console.log("hello");
	res.status(200);
});