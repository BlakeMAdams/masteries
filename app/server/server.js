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
app.get('/api/getCart', (req,res) =>{
	const db = app.get('db');
	db.importCart().then( (products)=> res.status(200).send(products))
});
app.post('/api/addItem', (req,res,next) =>{
	console.log('adding item to masterycart', req.body)
	const db = app.get('db');
	
	db.addItem([req.body.item_id, req.body.name, req.body.category, req.body.price])
		.then(() => res.status(200))
});
app.put('/api/updateItem', (req,res,next) =>{
	console.log('updating item to masterycart')
	const db = app.get('db');
	db.updateItem([id, quantity])
		.then(() => res.status(200))
});
app.delete('/api/deleteItem/:id', (req,res,next) =>{
	console.log('deleting item to masterycart')
	const db = app.get('db');
	db.deleteItem([req.params.id])
		.then(() => res.status(200))
});



app.listen(3030, () => console.log('listening port 3030'));