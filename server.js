//IMPORTS / REQUIRES
const express = require('express');
const bodyParser = require('body-parser');
const uc = require('./usersCtrl');

//VARIABLES
const app = express();
const port = 3000;

//TOP LEVEL MIDDLEWARE
app.use(bodyParser.json());

//ENDPOINTS
app.post('/api/users', uc.create);

app.get('/api/admins', uc.read);
app.get('/api/noadmins', uc.read);
app.get('/api/user_type/:userType', uc.read);
app.get('/api/users/:id', uc.read);
app.get('/api/users', uc.read);

app.put('/api/users/:id', uc.update);

app.delete('/api/users/:id', uc.delete)

//LISTEN
app.listen(port, () => console.log(`listening on port ${port}!`))