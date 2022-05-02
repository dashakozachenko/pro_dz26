'use strict';

function makeRandom() {
    const arr = [];

    function randomArray() {
        const randomNum = Math.floor(Math.random() * 100 + 1);
        if (!arr.includes(randomNum)) {
            arr.push(randomNum);
        }
    }

    for (let i = 0; arr.length < 100; i ++) {
        randomArray();
    }
    return arr;


}
makeRandom();
console.log(makeRandom());

