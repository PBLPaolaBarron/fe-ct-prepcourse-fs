function areaDelTriangulo(base, altura) {
  // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
  // Retornar el área de un triangulo teniendo su base y altura.
  // Por ejemplo: 
  // 10, 5 ---> 25
  // 0, 10 ---> 0
  // Tu código:

  console.log((base*altura)/2);
  return((base*altura)/2);

}

areaDelTriangulo(12, 19);
module.exports = areaDelTriangulo;
