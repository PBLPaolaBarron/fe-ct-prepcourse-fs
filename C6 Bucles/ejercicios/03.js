function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  if(x > y){
    console.log(x);
    return(x);
  }else if(y > x){
    console.log(y);
    return(y);
  }else{
    console.log(x);
    return(x);
  }
};

obtenerMayor(10, 5);
obtenerMayor(6, 10);
obtenerMayor(9, 9);

module.exports = obtenerMayor;
