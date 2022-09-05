const express = require('express');
const app = express();
const catalyst = require('zcatalyst-sdk-node');

app.put('/submit-score', express.json(), async (req, res) => {
	var catalystApp = catalyst.initialize(req);
	let datastore = catalystApp.datastore();
	let table = datastore.table('HighScores');
	var searchQuery = {
		"search" : "0",
		"search_table_columns": {
			"HighScores" : ["Score"]
		}
	}

	let rowData = {
		PlayerName: req.body.playerName,
		Score: req.body.score,
		ROWID: 0
	};

	let scoreAsInt = parseInt(req.body.score);

	for (let i = 0; i < scoreAsInt; i++)
	{
		searchQuery.search = i
		catalystApp.search().executeSearchQuery(searchQuery).then(res => {
			let test = JSON.stringify(res);
			console.log(test);
			console.log(test.HighScores);
			console.log(test.HighScores.ROWID);
			console.log("My score is higher than the lowest on record.");
			rowData.ROWID = res.HighScores.ROWID;
			
			let updateRowPromise = table.updateRow(rowData).catch(() => {
				console.log("Update row failed.");
			});
			return;
		}).catch(err => {
			console.log("No matching record.");
		});
	}

	return res.status(200);
});

app.get('/get-scores', express.json(), async (req, res) => {
	var catalystApp = catalyst.initialize(req);
	let cache = catalystApp.cache();
	let segment = cache.segment();

	return res.status(200);
});

module.exports = app;