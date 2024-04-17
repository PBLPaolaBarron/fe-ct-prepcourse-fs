function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:
  if(num % 2 === 0){
    console.log(false);
    return(false);
  }else{
    console.log(true);
    return(true)
    
  }
}

esImpar(14);

module.exports = esImpar;