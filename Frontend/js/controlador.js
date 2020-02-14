$(document).ready(function(){
    

  $.getJSON("/listar")
            .done(function (respuestaServ) {
             
                arreglo = respuestaServ.usuarios;
   					     

                

   					for (var i = 0; i < respuestaServ.usuarios.length; i++) {
                
            
             let   identificacion = arreglo[i].identificacion;
             let   tipoId = arreglo[i].tipoId;
             let   primerNombre = arreglo[i].primerNombre;
             let   segundoNombre = arreglo[i].segundoNombre;
             let   primerApellido = arreglo[i].primerApellido;
             let   segundApellido = arreglo[i].segundApellido;
             let   direccion= arreglo[i].direccion;
             let   telefono= arreglo[i].telefono;
             let   email= arreglo[i].email;
             let   ocupacion= arreglo[i].ocupacion;
             let   departamento = arreglo[i].departamento;
             let   municipio= arreglo[i].municipio;


                                    var newTr= document.createElement("tr");
                                    var newTd1 = document.createElement("td");
                                    var newB1 = document.createElement("span");
                                    newB1.setAttribute("class","ui-table-cell-label");
                                    newB1.innerHTML=identificacion;

                                    var newTd2 = document.createElement("td");
                                    var newB2 = document.createElement("span");
                                    newB2.setAttribute("class","ui-table-cell-label");
                                    newB2.innerHTML=tipoId;

                                    var newTd3 = document.createElement("td");
                                    var newB3 = document.createElement("span");
                                    newB3.setAttribute("class","ui-table-cell-label");
                                    newB3.innerHTML=primerNombre;

                                    var newTd4 = document.createElement("td");
                                    var newB4 = document.createElement("span");
                                    newB4.setAttribute("class","ui-table-cell-label");
                                    newB4.innerHTML=segundoNombre;

                                    var newTd5 = document.createElement("td");
                                    var newB5 = document.createElement("span");
                                    newB5.setAttribute("class","ui-table-cell-label");
                                    newB5.innerHTML=primerApellido;

                                    var newTd6 = document.createElement("td");
                                    var newB6 = document.createElement("span");
                                    newB6.setAttribute("class","ui-table-cell-label");
                                    newB6.innerHTML=segundApellido;

                                    var newTd7 = document.createElement("td");
                                    var newB7 = document.createElement("span");
                                    newB7.setAttribute("class","ui-table-cell-label");
                                    newB7.innerHTML=direccion;

                                    var newTd8 = document.createElement("td");
                                    var newB8 = document.createElement("span");
                                    newB8.setAttribute("class","ui-table-cell-label");
                                    newB8.innerHTML=telefono;

                                    var newTd9 = document.createElement("td");
                                    var newB9 = document.createElement("span");
                                    newB9.setAttribute("class","ui-table-cell-label");
                                    newB9.innerHTML=email;

                                    var newTd10 = document.createElement("td");
                                    var newB10 = document.createElement("span");
                                    newB10.setAttribute("class","ui-table-cell-label");
                                    newB10.innerHTML=ocupacion;

                                    var newTd11 = document.createElement("td");
                                    var newB11 = document.createElement("span");
                                    newB11.setAttribute("class","ui-table-cell-label");
                                    newB11.innerHTML=departamento;

                                    var newTd12 = document.createElement("td");
                                    var newB12 = document.createElement("span");
                                    newB12.setAttribute("class","ui-table-cell-label");
                                    newB12.innerHTML=municipio;
                                   

                                    


                                    // añade los elementos creados y su contenido
                                    var currentDiv = document.getElementById("tbody");
                                      currentDiv.appendChild(newTr);
                                      newTr.appendChild(newTd1);
                                      newTd1.appendChild(newB1);

                                      newTr.appendChild(newTd2);
                                      newTd2.appendChild(newB2);

                                      newTr.appendChild(newTd3);
                                      newTd3.appendChild(newB3);

                                      newTr.appendChild(newTd4);
                                      newTd4.appendChild(newB4);

                                      newTr.appendChild(newTd5);
                                      newTd5.appendChild(newB5);

                                      newTr.appendChild(newTd6);
                                      newTd6.appendChild(newB6);

                                      newTr.appendChild(newTd7);
                                      newTd7.appendChild(newB7);

                                      newTr.appendChild(newTd8);
                                      newTd8.appendChild(newB8);

                                      newTr.appendChild(newTd9);
                                      newTd9.appendChild(newB9);

                                      newTr.appendChild(newTd10);
                                      newTd10.appendChild(newB10);

                                      newTr.appendChild(newTd11);
                                      newTd11.appendChild(newB11);

                                      newTr.appendChild(newTd12);
                                      newTd12.appendChild(newB12);

                                      

           

          }//fin del for
        } );

    });
    

    $('#crearUsuario').submit(function () {
 
      var identificacion= $("#identificacion").val();
      var tipoId= $("#tipoId").val();
      var primerNombre = $("#primerNombre").val();
      var segundoNombre = $("#segundoNombre").val();
      var primerApellido = $("#primerApellido").val();
      var segundoApellido = $("#segundoApellido").val();
      var direccion= $("#direccion").val();
      var telefono = $("#telefono").val();
      var email = $("#email").val();
      var ocupacion = $("#ocupacion").val();
      var departamento = $("#departamento").val();
      var municipio = $("#municipio").val();
      
      
        $.post("/agregar", {identificacion: identificacion, tipoId: tipoId, primerNombre: primerNombre,segundoNombre: segundoNombre,primerApellido:primerApellido,segundoApellido:segundoApellido,direccion:direccion,telefono:telefono,email:email,ocupacion:ocupacion,departamento:departamento,municipio:municipio})
        .done(function (responseServer) {
         
              if (responseServer) {
                 alert(responseServer.message);
               
              } else {
                 alert("No se guardo el registro");
              }
          })                   
          return false; 
      });
      

      $('#eliminarUsuario').submit(function () {
 
        var identificacion= $("#identificacion").val();
  
             
          $.post("/delete",{identificacion: identificacion})
          .done(function (responseServer) {
           
                if (responseServer) {
                   alert(responseServer.message);
                 
                } else {
                  alert(responseServer.message);
                }
            })                   
            return false; 
        });
   

    $('#BuscarUsuario').submit(function () {

      var identificacion= $("#identi").val();
        

      if(identificacion.length==0){
        alert("Ingresar un Numero de identificación");
       }else{
        

      var   datos = {identi:identificacion};


       
        $.post("/buscar",datos, "json",null)
          .done(function (respuestaServ) {
       
            
              
                arreglo = respuestaServ.usuarios;
   					     

                

   					for (var i = 0; i < respuestaServ.usuarios.length; i++) {
                
            
             let   identificacion = arreglo[i].identificacion;
             let   tipoId = arreglo[i].tipoId;
             let   primerNombre = arreglo[i].primerNombre;
             let   segundoNombre = arreglo[i].segundoNombre;
             let   primerApellido = arreglo[i].primerApellido;
             let   segundApellido = arreglo[i].segundApellido;
             let   direccion= arreglo[i].direccion;
             let   telefono= arreglo[i].telefono;
             let   email= arreglo[i].email;
             let   ocupacion= arreglo[i].ocupacion;
             let   departamento = arreglo[i].departamento;
             let   municipio= arreglo[i].municipio;
                


                                 let  id = document.$("#identificacion");
                                      id.value =arreglo[i].identificacion;
                                      id.removeAttr("disabled");
                                
                                      

           

          }//fin del for
        } );
      }
      });