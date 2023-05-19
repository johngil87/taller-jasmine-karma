
export class MetodosCondicionales {

  public palabra:string ='radar' 
  constructor() { }

   esPalindromo(palabra: string) {
    // Convertir la palabra a minúsculas y eliminar los espacios en blanco
    palabra = palabra.toLowerCase().replace(/\s/g, '');
  
    // Obtener la longitud de la palabra
    var longitud = palabra.length;
  
    // Verificar si la palabra es un palíndromo
    for (var i = 0; i < longitud / 2; i++) {
      if (palabra[i] !== palabra[longitud - 1 - i]) {
        return false; // No es un palíndromo
      }
    }
    return true; // Es un palíndromo
    }
}
