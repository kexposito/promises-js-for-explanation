// PROMESA
miSegundaPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    console.log("En la segunda promesa");
    resolve("Mensaje Resuelto de la segunda promesa");
  }, 10);
});

let miPrimeraPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    console.log("En la primera promesa");
    resolve("Mensaje Resuelto de la primera promesa");
  }, 250);
});


const functionSincrona = () => {
  console.log("antes")
  const respuestaUno = miPrimeraPromise
  console.log(respuestaUno)
  const respuestaDos = miSegundaPromise
  console.log(respuestaDos)
  console.log("despues")
}

// dos formas
const functionAsyncWithThen = () => {
  miPrimeraPromise.then((mensajeUno) => {
    // segunda promesa necesita que este resuelto el mensaje uno
    // porque lo va a usar
    miSegundaPromise.then((mensaje) => {
      console.log(mensaje)
    })
  })
}

const functionAsyncWithThen = () => {
  console.log("antes")
  const mensajeUno = miPrimeraPromise.then((mensaje) => {
    console.log(mensaje)
  })

  miSegundaPromise.then((mensaje) => {
    console.log(`${mensajeUno} + ${mensaje}`)
  })
}

const functionAsyncWithAwait = async() => {
  console.log("antes")
  const respuestaUno = await miPrimeraPromise
  const respuestaDos = await miSegundaPromise
  console.log(respuestaUno)
  console.log(respuestaDos)
  console.log("despues")
}


functionSincrona()
// antes
// Promise { <pending> } */}
// Promise { <pending> } */}
// despues */}
// En la segunda promesa */}
// En la primera promesa */}

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

