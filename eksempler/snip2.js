/*Eksempel 2: Objekter er ikke immutable som standard */
let data1 = {foobar: 'foo'};
let data2 = data1;
data2.foobar = 'bar';

console.log('data1.foobar', data1.foobar);
console.log('data2.foobar', data1.foobar);