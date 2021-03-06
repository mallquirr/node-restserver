require('./config/config');

const  express = require('express')
const app = express()
 
 const bodyParser = require('body-parser');
 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get('/user', function (req, res) {
  res.json('get User')
});
 
app.post('/user', function (req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        })
    }
});

app.put('/user/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id: id
    });
});

app.delete('/user', function (req, res) {
    res.json('delete User');
});

app.listen(process.env.PORT, ()=>{
    console.log('Listening of Port:', process.env.PORT);
});