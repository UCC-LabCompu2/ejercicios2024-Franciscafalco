/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} nombre - El nombre de los inputs de metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgada
 */
function convertirUnidades(nombre, valor){
    //TODO: Debería admitir números con coma.
    if (isNaN(valor)){
        document.getElementById("metro").value="";
        document.getElementById("pie").value="";
        document.getElementById("pulgada").value="";
        document.getElementById("yarda").value="";
        alert("El valor ingresado no es correcto")
    }
    else if(nombre==="metro"){
        document.getElementById("pulgada").value = valor * 39.3701;
        document.getElementById("pie").value = valor * 3.28084;
        document.getElementById("yarda").value = valor * 1.09361;
    }
    else if (nombre==="pulgada"){
        document.getElementById("metro").value = valor * 0.0254 ;
        document.getElementById("pie").value = valor * 0.833333;
        document.getElementById("yarda").value = valor * 0.02777778;
    }
    else if (nombre==="pie"){
        document.getElementById("metro").value = valor * 0.3048;
        document.getElementById("pulgada").value = valor * 12;
        document.getElementById("yarda").value = valor * 0.333333;
    }
    else if (nombre==="yarda"){
        document.getElementById("metro").value = valor * 0.9144;
        document.getElementById("pulgada").value = valor * 36;
        document.getElementById("pie").value = valor * 3;
    }
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