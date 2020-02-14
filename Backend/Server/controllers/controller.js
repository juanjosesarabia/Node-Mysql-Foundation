const controller ={}

controller.list = (req, res)=>{
 req.getConnection((err, conn) =>{
    
    conn.query("select * from usuarios", (error,usuarios)=>{
            
       
        if(error){
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
       
  conn.query(`INSERT INTO usuarios (identificacion, tipoId, primerNombre, segundoNombre,primerApellido,segundApellido,direccion,telefono,email,ocupacion,departamento,municipio)VALUES('${req.body.identificacion}','${req.body.tipoId}','${req.body.primerNombre}','${req.body.segundoNombre}','${req.body.primerApellido}','${req.body.segundoApellido}','${req.body.direccion}','${req.body.telefono}','${req.body.email}','${req.body.ocupacion}','${req.body.departamento}','${req.body.municipio}');`, (error,usuarios)=>{
    
        if(error){
               res.json(error);
               res.status(500).send({message:`Error al realizar la peticion:${err}`})
           }else{
            res.status(200).send({message:`Registro Guardado`})
            
           }
          
         
               });
    });
   };

   controller.delete = (req, res)=>{
    
      
    req.getConnection((err, conn) =>{
       
       conn.query(`DELETE from usuarios WHERE identificacion ='${req.body.identificacion}';`, (error,usuarios)=>{
           
           if(error){
               res.json(err);
               res.status(500).send({message:`Registro no se encontró y no se eliminó`})
           }else{
            res.status(200).send({message:`Registro Eliminado`})
           }                   
               });
    });
   };

 


    controller.buscar = (req, res)=>{        
       
         req.getConnection((err, conn) =>{
           
            conn.query(`SELECT * from usuarios WHERE identificacion ='${req.body.identi}';`, (error,usuarios)=>{
                console.log(`SELECT * from usuarios WHERE identificacion ='${req.body.identi}';`);
                if(error){
                    res.json(error);
                    res.status(500).send({message:`Registro no se encontró `})
                }else{
                     
                    res.status(200).send({usuarios})
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