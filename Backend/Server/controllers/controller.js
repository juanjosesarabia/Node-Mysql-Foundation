const controller ={}

controller.list = (req, res)=>{
 req.getConnection((err, conn) =>{
    
    conn.query("select * from usuarios", (err,usuarios)=>{
            
       
        if(err){
            res.json(err);
            res.status(500).send({message:`Error al realizar la peticion:${err}`})
        }else{
           
            res.status(200).send({usuarios})
        }
        
            })
 });
};



controller.save = (req, res)=>{

    req.getConnection((err, conn) =>{
       
       conn.query(`INSERT INTO usuarios (identificacion, tipoId, primerNombre, segundoNombre,primerApellido,segundoApellido,direccion,telefono,email,ocupacion,departamento,municipio)VALUES(${req.body.identificacion},${req.body.tipoId},${req.body.primerNombre},${req.body.segundNombre},${req.body.primerApellido},${req.body.segundoApellido},${req.body.direccion},${req.body.telefono},${req.body.email},${req.body.ocupacion},${req.body.departamento},${req.body.municipio});`, (err,usuarios)=>{
               
        if(err){
               res.json(err);
           }else{
            console.log("Se ingresaron los datos");
            
           }
           console.log(req.body);
         
               });
    });
   };

   controller.delete = (req, res)=>{
    const {identificacion}  =req.params.identificacion;
  
    req.getConnection((err, conn) =>{
       
       conn.query(`DELETE from usuarios WHERE identificacion =${req.params.identificacion};`, (err,usuarios)=>{
           if(err){
               res.json(err);
           }else{
            console.log("Se elimino el usuario");
            console.log(req.params.identificacion);
           }                   
               });
    });
   };


   controller.edit = (req, res)=>{
    const {identificacion}  =req.params;
    
     req.getConnection((err, conn) =>{
        
        conn.query(`SELECT * from usuarios WHERE identificacion =${req.params.identificacion};`, (err,usuarios)=>{
            
            
                });
     });
    };






module.exports=controller;