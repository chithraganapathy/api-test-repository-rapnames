const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
	'21 savage': {
		'birthName': 'Savage',
		'age': 24,
		'birthLocation': 'Paris, France'
	},
	'chance the rapper':{
		'birthName': 'Chancelor',
		'age': 22,
		'birthLocation': 'Naples, France'
	},
	'unknown':{
		'birthName': 'Dylan',
		'age': 24,
		'birthLocation': 'Dylan'
	}
}

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html');//telling the server where to start looking for the file. server.js is the root in this case and start looking from here
})

app.get('/api/:paramname', (request, response) => {
	const rname = request.params.paramname.toLowerCase();
	if(rappers[rname])
		response.json(rappers[rname].birthName);
	else
		response.json(rappers['unknown'].birthName)
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}!`);
})

