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
    








  
            

 function listarEntidades(){

   $.getJSON(localStorage["host"] + "php/listarEntidades.php")
             .done(function (respuestaServ) {
                   var nombreI;
                 if (respuestaServ.validacion=="ok") {
                      arreglo = respuestaServ.datos;
                      cantidad = respuestaServ.n;
                      
                      nombreUsuario = respuestaServ.sesion;

                 if (nombreUsuario!==undefined) {
                     document.getElementById('nombreUsuario').innerHTML=nombreUsuario ;
                  }

                      for (var i = 0; i < cantidad; i++) {
                         nombreI = arreglo[i].nombreI;

                                     var x = document.createElement("OPTION");
                                     var t = document.createTextNode(nombreI);
                                     //x.setAttribute("value", i);
                                     x.appendChild(t);
                                     document.getElementById("listaEse").appendChild(x);
           }//fin del for
                 }else{
                   alert(respuestaServ.mensaje);
                 }
                });

             };



function validarEntidad(){// Validar la entidad
  var datoEntidad = document.getElementById("entidad").value;

    if (datoEntidad.length == 0) {
       alert("Debes seleccionar una entidad");
          } else {
                    $.getJSON(localStorage["host"] + "php/buscarEntidad.php",{id:datoEntidad})
                                         .done(function (respuestaServer) {
                                             if (respuestaServer.validacion == "ok") {
                                               doc = respuestaServer.entidad;
                                               zode = document.getElementById("Zodes");
                                               zode.value =doc[0].zode;
                                               nom = document.getElementById("Municipio");
                                               nom.value =doc[0].nombre;
                                               ap = document.getElementById("nombreI");
                                               ap.value =doc[0].nombreI;
                                               geren = document.getElementById("nombreG");
                                               geren.value =doc[0].ngerente;
                                               tel = document.getElementById("telefono");
                                               tel.value =doc[0].telefono;
                                               fech = document.getElementById("firmaF");
                                               fech.value =doc[0].fechaFinal;
                                              document.getElementById("nombreG").removeAttribute("disabled");
                                              document.getElementById("telefono").removeAttribute("disabled");
                                              document.getElementById("firmaF").removeAttribute("disabled");
                                              document.getElementById("botonGuardar").removeAttribute("disabled");


                                             } else {
                                                 alert(respuestaServer.mensaje);
                                             }
                                         })

                    }
             }

function actualizarGerente(){//Actualizar gerente
              // se recolectan los datos ingresados al formulario
            var nombreIs= $("#nombreI").val();
            var nombreG = $("#nombreG").val();
            var telefono = $("#telefono").val();
            var firmaF = $("#firmaF").val();

             $.getJSON(localStorage["host"] + "php/registroGerente.php", {nombreI: nombreIs, nombre: nombreG, telefono: telefono, firma: firmaF,})
                      .done(function (respuestaServer) {

                            if (respuestaServer.validacion == "ok") {
                            	alert(respuestaServer.mensaje);
                              window.location.href = 'modificarG.html';
                            } else {
                                alert(respuestaServer.mensaje);
                            }
                        })
                return false;
            }



/////////////////////////////////////////////////////////////////codigo sin utilizacion este proyecto

function enviarCorreo(){

  $.getJSON(localStorage["host"] + "php/enviarCorreo.php")
                       .done(function (respuestaServer) {
                           if (respuestaServer.validacion == "ok") {
                               alert(" Se envío correo");
                                 console.log(" Se envío correo");
                           } else {
                               alert(respuestaServer.mensaje);
                           }
                       })
}


function extraerPdf(){
  window.open(localStorage["host"] + "php/imprimirPDF.php","Nueva ventana");

  
}

