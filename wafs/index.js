const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const request = require('request')


app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(express.static('public'))

app.get('/', (req, res) => {
	function callback(error, response, body) {
		if (error) {
			console.log(response.statusCode);
		}else{
			var info = JSON.parse(body);
			res.render('home', {
				item: info
			})
		}
	}
	request({
		url: 'https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-1819/forks?per_page=50&access_token=3a34c6a3e4264f07a6fbb4b6f0b73f99a21c9b28',
		headers: {
			'User-Agent': 'request'
		}
	}, callback);
})



app.get('/issues/:id', (req, res) => {
	let data = {}
	function callback(error, response, body, ex) {
		if (error) {
			res.send
		}else if(!data.open){
			data.open = body
		}else{
			data.closed = body
			res.render('issues', {data: data})
		}
	}
	request({
		url: 'https://api.github.com/repositories/' + req.params.id + '/issues?access_token=3a34c6a3e4264f07a6fbb4b6f0b73f99a21c9b28',
		headers: {
			'User-Agent': 'request'
		},
		json: true
	}, callback)

	request({
		url: 'https://api.github.com/repositories/' + req.params.id + '/issues?state=closed&access_token=3a34c6a3e4264f07a6fbb4b6f0b73f99a21c9b28',
		headers: {
			'User-Agent': 'request'
		},
		json: true
	}, callback)
})

app.get('*', (req, res) => {
	res.render('error', {
		error: "Deze pagina lijkt (nog) niet niet te bestaan"
	})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
