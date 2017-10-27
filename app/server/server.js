require('dotenv').config();

const express = require('express')
	, bodyParser = require('body-parser')
	, massive = require('massive')
	, cors = require('cors')

	const app = express();
	app.use(cors());
	app.use(bodyParser.json());






	app.listen(3030, () => console.log('listening port 3030'));