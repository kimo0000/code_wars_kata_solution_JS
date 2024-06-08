/*
Tâche
Créez une fonction qui renvoie toujours True/ true pour chaque élément
d'une liste donnée.Cependant, si un élément est le mot « flick » ,
passez à toujours renvoyer la valeur booléenne opposée.
*/

function flickSwitch(arr) {
// Methode 1:
// let item = true;
// let final = [];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] == 'flick') {
//         item = !item;
//         final.push(item);
//     } else {
//        final.push(item);
//     }
// }
// return final;

// Methode 2:
let flag = true;
return arr.map(el => el == "flick" ? flag = !flag : flag);
}

console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));