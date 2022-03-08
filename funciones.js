let resultado = sumarTodo(12, 13, 5, 89, 5);
console.log(resultado)

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma = suma + arguments[i];
    }
    return suma;
}


//paso por valor 

let x = 10;

function cambiarValor (a){
    a = 20;
}

cambiarValor(x)
console.log(x)

const persona1 = {
    nombre: 'Mariana',
    apellido: 'Quintero'
}

function cambiarValor (p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Morales';
    return p1;
}
//paso por referencia
cambiarValor(persona1);
console.log(persona1)


let codigoUsuario = "ABCD123:Mariana";
let nombreUsuario = codigoUsuario.split(":");
console.log(`Hola ${nombreUsuario[1]}`)



