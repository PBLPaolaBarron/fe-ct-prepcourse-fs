function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var producto = 1; 

  if(a < 0 || b < 0){
    console.log(0);
    return(0);
  }


  for( var i = a; i <= b; i++){
    producto *= i; 
  }

  console.log(producto);
  return(producto);
};

productoEntreNúmeros(-5, 5);


module.exports = productoEntreNúmeros;