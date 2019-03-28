const express = require('express')
const app = express()
const port = process.env.PORT || 3030;
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const request = require('request')
require('dotenv').config()
const compression = require('compression')
const fs = require('fs');

app.use(compression())
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
				item: info,
				helpers: {
			        imgCheck: function (index) {
						if (fs.existsSync("./public/img/img_optim/" + index.data.key + ".jpg")) {
						    return index.data.key + '.jpg';
						}else{
							return index.data.key + '.png';
						}
					},
			    }
			})
		}
	}
	request({
		url: 'https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-1819/forks?per_page=50&access_token=' + process.env.GIT_KEY,
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
		url: 'https://api.github.com/repositories/' + req.params.id + '/issues?access_token=' + process.env.GIT_KEY,
		headers: {
			'User-Agent': 'request'
		},
		json: true
	}, callback)

	request({
		url: 'https://api.github.com/repositories/' + req.params.id + '/issues?state=closed&access_token=' + process.env.GIT_KEY,
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
