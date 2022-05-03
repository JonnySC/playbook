//Crear un objeto vacío//
const Object = {}

console.log(object);

//Crear un objeto con propiedades//
const ObjectUsuario = {
    name: "Jonny",
    age: 29
}
console.log(ObjectUsuario);

//Crear un objeto con propiedades diferentes//
    const ObjectUsuarioDireccion = {
        name: "Jonny",
        age: 29,
        nicknames: [
        "JonnnyTrip",
        "Trips",
        "TripOwO"
        ],
        address: {
        zip_code: "53820",
        city: "Edo. de México",
        }
    }
    console.log("Ejemplo 3: Objeto con diferentes propiedades")
    console.log(ObjectUsuarioDireccion);
    console.log(ObjectUsuarioDireccion.name)
    console.log(ObjectUsuarioDireccion["address"])

//Crear un objeto con métodos//
const ObjectPet = {
    name: "Isis",
    // Esta es una función que se guarda como propiedad
    sayHello: function(){
      // this.name hace referencia a la propiedad del objeto
      console.log(`${this.name} te saluda en español!`)
    }
  }
  
  console.log("Ejemplo 4: Objeto con métodos")
  pet.sayHello()

//Crear un objeto que reciba parámetros//
const ObjectMyPet = {
    name: "Isis",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  ObjectMyPet.sayHelloToMyPet("Isis")