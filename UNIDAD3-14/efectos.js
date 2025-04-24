///primero crear un rray que contenga el orden de los colores//
const color=['rojo','amarillo','verde'];
//debemos selecionar la variable que lleve la posicion atual del color//
let indice=0;
//esat animacion se llama cuazndo relaizas un clcik al booton//
function cambiarLuz(){
    //priumeros se debe quitar la clase activa de todos los colores//
    color.forEach(color => {
        document.getElementById(color).classList.remove('activa');
    });

    //activa al color actual usando el indice//
    const colorActual=color[indice];
    document.getElementById(colorActual).classList.add('activa');
    //luego tenemos que realizar el avance al otro color//
    indice=(indice+1)%color.length;
}