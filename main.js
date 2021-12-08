const PORT = process.env.PORT || 5000;

const Application = require('./core/Application.js');
const userRouter = require('./src/user-router.js');
const jsonParser = require('./core/ParseJson.js');
const parseUrl = require('./core/ParseUrl.js');

const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000/'));

app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))