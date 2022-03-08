//Funcion constructor de objetos tipo persona

function Persona(nombre, apellido, email){
    //el nombre del parametro es igual al del atributo
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}


//metodo
let padre = new Persona('Mariana', 'Quintero', 'mquinteromo@cesde.net');
console.log(padre);

let madre = new Persona('Lina', 'Morales', 'mmoralesli@cesde.net');
console.log(madre);

