function obtenerAreaRectangulo(alto, ancho) {
  // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 2 ---> 2
  // Tu código:

  console.log(ancho*alto);
  return(ancho*alto);
}

obtenerAreaRectangulo(12, 6);

module.exports = obtenerAreaRectangulo;
