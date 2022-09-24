const express = require('express');
const app = express();
const catalyst = require('zcatalyst-sdk-node');

app.put('/submit-score', express.json(), async (req, res) => {
	let catalystApp = catalyst.initialize(req);
	let datastore = catalystApp.datastore();
	let table = datastore.table('HighScores');
	let searchQuery = {
		"search": "0",
		"search_table_columns": {
			"HighScores": ["Score"]
		}
	}

	let rowData = {
		PlayerName: req.body.playerName,
		Score: req.body.score,
		ROWID: 0
	};

	let scoreAsInt = parseInt(req.body.score);

	for (let i = 0; i < scoreAsInt; i++) {
		searchQuery.search = i
		await catalystApp.search().executeSearchQuery(searchQuery)
			.then(res => {
				if (Object.keys(res).length !== 0) {
					console.log("Found a record with a lower score than mine.");
					rowData.ROWID = res.HighScores[0].ROWID;

					let updateRowPromise = table.updateRow(rowData).catch(() => {
						console.log("Update row failed.");
					});
					scoreAsInt = -1;
				}
			})
			.catch(err => {
				console.log("No matching record.");
			});
	}

	return res.status(200);
});

app.get('/get-scores', async (req, res) => {
	let catalystApp = catalyst.initialize(req);
	let datastore = catalystApp.datastore();
	let table = datastore.table('HighScores');

	await table.getPagedRows({ nextToken: undefined, maxRows: 5 })
		.then(({ data }) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(data);
		})
		.catch((err) => {
			console.log(err.toString());
		});
});

module.exports = app;
