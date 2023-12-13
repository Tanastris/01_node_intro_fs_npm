"use strict";
console.log("intro.js file was loaded");

function sum(sk1, sk2) {
  console.log(sk1 + sk2);
}

sum(15, 45);

// parasyti funkcija kurio suskaiciuoja argumentu gauto masyvo vidurki
// ir iskonsolina rezultata

function getAvg(arr) {
  let avg = 0;
  arr.forEach((obj) => {
    avg += obj / arr.length;
  });
  console.log(avg);
  return avg;
}

getAvg([1, 2, 3]);
