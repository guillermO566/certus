//obtener el boton por su ID y lo alamcenaremos en una variable//
const boton=document.getElementById("botonColor");

//areglo de colore posiblespara fondo//
const colores=[`lightblue`,`lightgreen`,`lightpink`,`lightyellow`,`lavender`];

//añadir evento ala hora de hacer un click//
boton.addEventListener(`click`,cambiarColor);

//definir la funcion para cmbair el color//
function cambiarColor(){
    /*vamos a generar un numero aleatorio entre 0 y 
    la cantidad de colores -1*/
    const indicadorAleatorio=Math.Floor(Math.random()*colores.length);
    /*usaremos ese numero para seleccionar un clor del arreglo*/
    const colorSeleccionado=colores[indicadorAleatorio];
    /*por ultimo cmbiamos el coor del fondo de la pagina usando Document.Body*/
    document.body.style.backgroundColor=colorSeleccionado;

}
