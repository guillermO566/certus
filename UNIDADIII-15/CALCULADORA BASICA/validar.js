//VAMOS AGREGAR VALORES AL PRESIONAR EL BOTON DEL INPUT
//DE LA CALCULADOR
function appendValue(value){
    //AHORA VAMOS ACCEDER AL INPUT USANDO UN DISPLAY (INDICE)
    //Y VAMOS AÑADIR EL CONTENIDO DEL VALOR
    document.getElementById('display').value+=value;
}

//SE DEBE DE PROCEDER A LIMPIAR EL DISPLAY
function clearDisplay(){
//BORRAR EL CONTENIDO DEL INPUT
    document.getElementById('display').value='';
}

/*SE DEBE EVALUAR LA OPERACION MATEMATICA
ESCRITA EN EL DISPLAY*/
function calculador(){
    try{
        //SE UTILIZA EL eval(), para calcular el resultado
        //de la cadena (eje: "2+3+4")
        const resul=eval(document.getElementById('display').value);
        //MOSTRAR EL RESULTADO EN EL INPUT
        document.getElementById('display').value=resul;
    }catch{
        //SI EXISTE UN ERROR
        alert("Expresion no valida");
    }
}
