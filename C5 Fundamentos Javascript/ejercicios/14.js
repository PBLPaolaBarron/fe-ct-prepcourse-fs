function mayorQueCincuenta(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 51 ---> true
  // 15 ---> false
  // Tu código:
  if(num > 50){
    console.log(true);
    return(true);
  }else{
    console.log(false);
    return(false)
    
  }
}
mayorQueCincuenta(40);

module.exports = mayorQueCincuenta;
