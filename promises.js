// PROMESA
let miPrimeraPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    console.log("En la promesa");
    resolve();
  }, 250);
});


const functionSincrona = () => {
  console.log("antes")
  miPrimeraPromise
  console.log("despues")
}

const functionAsyncWithThen = () => {
  console.log("antes")
  miPrimeraPromise.then(() => {
    console.log("despues")
  })
  console.log("despues del then")
}

const functionAsyncWithAwait = async() => {
  console.log("antes")
  await miPrimeraPromise
  console.log("despues")
}


functionSincrona()
// antes
// despues
// En la promesa

functionAsyncWithThen()
// antes
// En la promesa
// despues


functionAsyncWithAwait()
// antes
// En la promesa
// despues

