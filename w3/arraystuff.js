let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter((word) => word[0] === 'B');

console.log(namesB)

let namesLength = names.map((word) => word.length);
console.log(namesLength)



let avStrLen = names.reduce((total, word, x) => word + total ).length / names.length

console.log(avStrLen)