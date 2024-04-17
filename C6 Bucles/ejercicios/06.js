function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if(num >= 100 && num<1000){
    console.log(true);
    return(true);
  }else{
    console.log(false);
    return(false);
  }
};

tieneTresDigitos(100);
tieneTresDigitos(119);
tieneTresDigitos(90);

module.exports = tieneTresDigitos;
