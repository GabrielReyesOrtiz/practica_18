let express = require('express');//Inyectamos express

let app = express();

let personsRoute = require('./routes/person');

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));
// Aqui vamos a decir que puerto vamos ausar. 
let PORT = process.env.PORT || 3000; 
// Aqui indicamos por consola que puerto nos esta escuchando
app.listen(PORT,()=>{
  console.log('escuchando en el puerto 3000')
});
