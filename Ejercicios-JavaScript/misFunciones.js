/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} nombre - El nombre de los inputs de metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgada
 */
let convertirUnidades=(nombre, valor)=>{
    //TODO: Debería admitir números con coma.
    let metro,pulgada,pie,yarda;
    if (isNaN(valor)){
        metro="";
        pie="";
        pulgada="";
        yarda="";
        alert("El valor ingresado no es correcto")
    }
    else if(nombre==="metro"){
        metro=valor;
        pulgada = valor * 39.3701;
        pie = valor * 3.28084;
        yarda= valor * 1.09361;
    }
    else if (nombre==="pulgada"){
        pulgada=valor;
        metro = valor * 0.0254 ;
        pie= valor * 0.833333;
        yarda= valor * 0.02777778;
    }
    else if (nombre==="pie"){
        pie=valor;
        metro = valor * 0.3048;
        pulgada = valor * 12;
        yarda = valor * 0.333333;
    }
    else if (nombre==="yarda"){
        yarda=valor;
        metro = valor * 0.9144;
        pulgada = valor * 36;
        pie = valor * 3;
    }
    document.getElementById("metro").value=metro;
    document.getElementById("pie").value=pie;
    document.getElementById("pulgada").value=pulgada;
    document.getElementById("yarda").value=yarda;
}
/**
 * Permite convertir grados a radianes y viceversa.
 * @method convertirGR
 * @param {string} id - grados, radianes
 */
function convertirGR(id){
    let grad,rad;
    //TODO: Agregar mensajes de error cuando se agregan letras.
    //TODO: Debería admitir números con coma.
    if (id=="grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
        document.getElementById("radianes").value=rad;
    }
        else if (id=="radianes"){
            rad=document.getElementById("radianes").value;
            grad=(rad*180)/Math.PI
        document.getElementById("grados").value=grad;
        }
}