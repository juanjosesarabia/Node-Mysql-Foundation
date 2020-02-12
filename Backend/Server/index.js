const express = require('express')
const app = express()
const bodyParser =require('body-parser')// modulo para  leer parametros


const port = process.env.PORT || 3000

app.use(express.static('../Frontend'));

app.use(bodyParser.urlencoded({extended:false}))// Para no hacer parser a objetos o arreglo todo en json
app.use(bodyParser.json())// para para leer json
 

 
 
 app.listen(port,()=>{
	console.log(`Servidor montado en  http://localhost:${port}`);
	})
