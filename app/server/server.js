require('dotenv').config();

const express = require('express')
	, bodyParser = require('body-parser')
	, massive = require('massive')
	, cors = require('cors')

	const app = express();
	app.use(cors());
	app.use(bodyParser.json());

// DATABASE CONNECTION
massive(process.env.CONNECTIONSTRING).then( db => {
	app.set('db', db);
})

// ENDPOINTS

app.get('/api/getProducts', (req,res) =>{
	const db = app.get('db');
	db.importProducts().then( (products)=> res.status(200).send(products))
});



app.listen(3030, () => console.log('listening port 3030'));