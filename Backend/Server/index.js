const express = require('express');
const app = express();
const bodyParser =require('body-parser');// modulo para  leer parametros
const morgan =require('morgan');
const mysql=require('mysql');
const myConnection =require('express-myconnection');

const port = process.env.PORT || 3000
const routers = require('./rutas/rutas');

app.use(express.static('../Frontend'));

app.use(bodyParser.urlencoded({extended:false}))// Para no hacer parser a objetos o arreglo todo en json
app.use(bodyParser.json())// para para leer json
 
app.use(morgan("dev"));

//conexion a la base de datos
app.use(myConnection(mysql,{
	host:'localhost',
	user: 'root',
	password:'',
	port: 3306,
	database: 'data'
}))
 
app.use('/', routers);

 
 app.listen(port,()=>{
	console.log(`Servidor montado en  http://localhost:${port}`);
	})
