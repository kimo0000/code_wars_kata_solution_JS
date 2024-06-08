/* 
La fonction RVB est incomplète. Complétez-le de manière à ce que la 
transmission de valeurs décimales RVB entraîne le renvoi d'une 
représentation hexadécimale. Les valeurs décimales valides pour 
RVB sont comprises entre 0 et 255. Toutes les valeurs qui se
situent en dehors de cette plage doivent être arrondies à la valeur
valide la plus proche.
Remarque : votre réponse doit toujours comporter 6 caractères,
 le raccourci avec 3 ne fonctionnera pas ici.
*/

function rgb(r, g, b) {
  // Methode 1:
  // function decToHexa(color) {
  //     if(color > 255) return "FF";
  //     if(color < 0) return "00";
  //     return color.toString(16).padStart(2, "0").toUpperCase();
  // }

  // return `${decToHexa(r)}${decToHexa(g)}${decToHexa(b)}`;

  // Methode 2:
  // let val1 = r < 0 ? "00" : r > 255 ? "FF": r.toString(16).padStart(2, "0").toUpperCase();
  // let val2 = g < 0 ? "00" : g > 255 ? "FF": g.toString(16).padStart(2, "0").toUpperCase();
  // let val3 = b < 0 ? "00" : b > 255 ? "FF": b.toString(16).padStart(2, "0").toUpperCase();
  // return `${val1}${val2}${val3}`;

  // Methode 3:
//   let arr = [r, g, b];
//   return arr.map(el => {
//     return el < 0 ? "00" : el > 255 ? "FF" : el.toString(16).padStart(2, "0").toUpperCase();
//   }).join('');
}

console.log(rgb(0, 10, -20));

