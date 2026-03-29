'use strict' 
const express = require('express'); 
const morgan = require('morgan'); 
const dotenv = require('dotenv');

dotenv.config();

const app = express(); 
const PORT = process.env.PORT;
app.use(morgan('dev')); 


app.use(express.static('public')); 

app.use((req, res) => { 


    res.status(404).send(`<h2>Uh Oh!</h2><p>Sorry ${req.url} cannot be found here</p>`); 
}); 

app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});