#!/usr/bin/env node

var fs = require('fs');
var outfile = "outputPrimes.txt";

function isPrime(n) {
    var sqrtn = Math.sqrt(n);

    for (var i = 2; i <= sqrtn; i++)
        if (n % i === 0) return false;
    return true;
}

var firstKPrimes = function(k) {
    var arr = [];
    var number = 3;
    arr.push(2);
    while (arr.length < k) {
    	if (isPrime(number)) {
    		arr.push(number);
    	}
    	number += 2;
    }
    return arr;
};

// Print to console
var fmt = function(arr) {
    return arr.join(",");
};

var k =100;
fs.writeFileSync(outfile, fmt(firstKPrimes(k)));
console.log("Script: " + __filename + "\nWrote to: " + outfile);