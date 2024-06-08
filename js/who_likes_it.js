/*
You probably know the "like" system from Facebook and other pages.
People can "like" blog posts, pictures or other items. We want to
create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names
of people that like an item. It must return the display text as
hown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

function likes(names) {
// Methode 1:
//   if(!names.length) return 'no one likes this';
//   if(names.length == 1) {
//      return `${names[0]} likes this`;
//   } else if(names.length == 2) {
//      return `${names[0]} and ${names[1]} like this`;
//   } else if(names.length == 3) {
//      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else {
//      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }

//   Methode 2:
// if (!names.length) return "no one likes this";
// return names.length == 1
//   ? `${names[0]} likes this`
//   : names.length == 2
//   ? `${names[0]} and ${names[1]} like this`
//   : names.length == 3
//   ? `${names[0]}, ${names[1]} and ${names[2]} like this`
//   : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;

//   Methode 3:
if (!names.length) return "no one likes this";
switch(names.length) {
   case 1:
       return `${names[0]} likes this`;
    break;
   case 2:
       return `${names[0]} and ${names[1]} like this`;
    break;
   case 3:
       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    break;
   default:
       return `${names[0]}, ${names[1]} and ${
         names.length - 2
       } others like this`;
}
}

console.log(likes(["kimo", "ahmed", "ikhlas", "karim", "olkj", "ytdgfd"]));