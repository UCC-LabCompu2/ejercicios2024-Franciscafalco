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

/**
 * Permite mostrar y ocultar un div en base a la selección de un radio button
 * @param mostrar_ocultar
 * @param {string} valor - contiene: val_mostrar, val_ocultar
 */
let mostrar_ocultar = (valor) =>{
    if(valor==="val_mostrar"){
        document.getElementsByName("unDiv")[0].style.display='block';
    } else if(valor==="val_ocultar"){
        document.getElementsByName("unDiv")[0].style.display='none';
    }
}
/**
 * Permite sumar 2 numeros ingresados por el usuario
 * @param suma
 */
let suma = () =>{
    const s1 = Number (document.getElementById("nums1").value);
    const s2 = Number (document.getElementById("nums2").value);
    document.getElementById("totalS").value=s1+s2;
}

/**
 * Permite restar 2 numeros ingresados por el usuario
 * @param resta
 */
let resta = () =>{
    const r1 = Number (document.getElementById("numr1").value);
    const r2 = Number (document.getElementById("numr2").value);
    document.getElementById("totalR").value=r1-r2;
}

/**
 * Permite dividir 2 numeros ingresados por el usuario
 * @param divide
 */
let divide = () =>{
    const d1 = Number (document.getElementById("numd1").value);
    const d2 = Number (document.getElementById("numd2").value);
    document.getElementById("totalD").value=d1/d2;
}

/**
 * Permite multiplicar 2 numeros ingresados por el usuario
 * @param resta
 */
let multiplica = () =>{
    const m1 = Number (document.getElementById("numm1").value);
    const m2 = Number (document.getElementById("numm2").value);
    document.getElementById("totalM").value=m1*m2;
}