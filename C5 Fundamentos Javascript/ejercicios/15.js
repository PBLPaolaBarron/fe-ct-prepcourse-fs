function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:

  if(num % 2 === 0){
    console.log(true);
    return(true);
  }else{
    console.log(false);
    return(false)
    
  }
}

esPar(13);
module.exports = esPar;
