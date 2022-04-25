// PROMESA
let miPrimeraPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    console.log("En la promesa");
    resolve("Mensaje Resuelto");
  }, 250);
});


const functionSincrona = () => {
  console.log("antes")
  const respuesta = miPrimeraPromise
  console.log(respuesta)
  console.log("despues")
}

const functionAsyncWithThen = () => {
  console.log("antes")
  miPrimeraPromise.then((mensaje) => {
    console.log(mensaje)
    console.log("despues")
  })
}

const functionAsyncWithAwait = async() => {
  console.log("antes")
  const respuesta = await miPrimeraPromise
  console.log(respuesta)
  console.log("despues")
}


functionSincrona()
// antes
// <pending>
// despues
// En la promesa

functionAsyncWithThen()
// antes
// En la promesa
// Mensaje Resuelto
// despues


functionAsyncWithAwait()
// antes
// En la promesa
// Mensaje Resuelto
// despues

