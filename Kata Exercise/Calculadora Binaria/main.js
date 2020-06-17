/*El sistema binario solamente cuenta con dos cifras diferentes (el 0 y el 1) 
por lo que para pasar cualquier cifra a binario hay que dividir 
el número del sistema decimal entre 2. 
El resultado se sigue dividiendo entre dos, hasta que el número a dividir sea 1.
 Una vez se llega a este punto, hay que ordenar los restos del último al primero. 
Éste será el número binario que buscamos.*/

var countBits = function(n) {
  
   var newArr = n.toString(2).split('').map(Number) //map
    var count = 0 //toString
    for (var i=0; i<newArr.length; i++){
        count += newArr[i]
    }
    
    return count  
}