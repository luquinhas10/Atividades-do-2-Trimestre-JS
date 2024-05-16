function getNumRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
   
   function generateRandomArray(length, min, max) {
     let randomArray = [];
     for (let i = 0; i < length; i++) {
       let NumRandom = getNumRandom(min, max);
       randomArray.push(NumRandom);
     }
     return randomArray;
   }
   
   let meuNumeroAleatorio = generateRandomArray(10, 1, 100);
   console.log(meuNumeroAleatorio);