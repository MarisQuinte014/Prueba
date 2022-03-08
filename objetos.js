let persona = {
    nombre: 'Mariana',
    apellido: 'Quintero',
    vacunado: true,
    edad: 19,
    idioma: 'es',
    get leng(){
        return this.idioma.toUpperCase();
    },
    set leng( leng){
        this.idioma = leng.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' +  this.apellido;
    }
}


console.log(persona.leng);
persona.leng = 'US'
console.log(persona.leng)
console.log(persona.idioma)








// persona.tel = '3103815783';

// console.log(persona);

// delete persona.tel;

// console.log(persona);


// //formas de imprimir los objetos 
// //concatenando 

// console.log(persona.nombre + ' ' + persona.apellido);

// // en un for in

// for(propiedad in persona){
//     console.log(persona[propiedad])
// }

// //como un array 

// let personaArray = Object.values(persona);
// console.log(personaArray)

// //como un formato JSON

// let personaString = JSON.stringify(persona);
// console.log(personaString);



// console.log(persona["apellido"])

// for(nombrePropiedad in persona){
//     console.log(nombrePropiedad);
//     console.log(persona[nombrePropiedad]);
// }

// console.log(persona.nombreCompleto())

// let persona2 = new Object();
// persona2.nombre = 'Carlos';
// persona2.direccion = 'cra 89b # 30c - 31';
// persona2.telefono = '3145894223';

// console.log(persona2.direccion)

