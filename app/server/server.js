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
app.post('/api/postProduct', (req,res,next) =>{
	const db = app.get('db');
	db.addProduct([id, name, type])
		.then(() => res.status(200))
});
app.update('/api/updateProduct', (req,res,next) =>{
	const db = app.get('db');
	db.updateProduct([id, name, type])
		.then(() => res.status(200))
});
app.delete('/api/deleteProduct', (req,res,next) =>{
	const db = app.get('db');
	db.deleteProduct([id])
		.then(() => res.status(200))
});



app.listen(3030, () => console.log('listening port 3030'));