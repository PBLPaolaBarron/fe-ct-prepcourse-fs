function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    console.log("Es una vocal");
    return("Es vocal");
  }else{
    console.log("Dato incorrecto");
    return("Dato incorrecto");
  }
}

esVocal("hola mundo");

module.exports = esVocal;
