const http = require('http');
const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;
const Router = require('./core/Router.js');
const Application = require('./core/Application.js');

const app = new Application();

const router = new Router();

router.get('/users', (req, res) => {
    res.end('You send request to /users')
})

router.get('/posts', (req, res) => {
    res.end('You send request to /posts')
})
app.addRouter(router);
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))