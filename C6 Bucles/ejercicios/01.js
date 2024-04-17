function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if(a === b && a < 0 && b < 0){
    console.log(true);
    return(true);
  }else{
    console.log(false);
    return(false);
  }
};

esIgualYNegativo(-1,-1);
esIgualYNegativo(-1, 2);
esIgualYNegativo(3, 4);






module.exports = esIgualYNegativo;
