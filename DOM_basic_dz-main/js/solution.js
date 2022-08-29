'use strict'

const ul = document.body.childNodes[1];
let counter = 0;
const arrayOfLi = [];
for (const ulElement of ul.childNodes) {
    if (ulElement.innerHTML) {
        console.log(ulElement.innerHTML)
        counter += 1;
        arrayOfLi.push(ulElement.innerHTML)
    }
}
console.log(counter)
console.log(arrayOfLi)
