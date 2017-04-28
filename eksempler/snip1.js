/*Eksempel 1: Strenger og nummer er immutable som standard */
let foo = 'foo'; //Setter minneadressen til foo
let bar = foo; //Setter minneadressen lik som foo
bar = 'bar'; //Siden vi endrer bar så får han en ny minneadresse

console.log('foo:', foo);
console.log('bar:', bar);