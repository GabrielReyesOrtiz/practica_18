let express = require('express'); //Inyeccion de express
let router = express.Router(); //Referencia al router 

router.get('/person',(req,res)=>{
  res.send('has solicitado el listado de personas')
});

module.exports=router;