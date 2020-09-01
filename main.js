"use strict";
exports.__esModule = true;
var ArrayManipulations = /** @class */ (function () {
    function ArrayManipulations() {
    }
    ArrayManipulations.prototype.arrayFindMultiples = function (myArray) {
        var temp = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
                temp[j] = myArray[i];
                j++;
            }
        }
        return temp;
    };
    ArrayManipulations.prototype.arraySeparate = function (myArray) {
        var str = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (typeof (myArray[i] === "string")) {
                str[j] = myArray[i];
                j++;
            }
        }
        return str;
    };
    ArrayManipulations.prototype.arraySplit = function (str) {
        var temp = str.split(",");
        var primeArray = [];
        var k = 0;
        for (var i = 0; i < temp.length; i++) {
            var y = +temp[i];
            for (var j = 2; j < y; j++) {
                if (y % j === 0)
                    continue;
                else {
                    primeArray[k] = y;
                    k++;
                }
            }
        }
        return primeArray;
    };
    ArrayManipulations.prototype.arraySort = function (myArray) {
        myArray.sort();
        myArray.reverse();
        return myArray;
    };
    ArrayManipulations.prototype.arrayReplace = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 === 0)
                myArray[i] = 5;
        }
        return myArray;
    };
    return ArrayManipulations;
}());
var myArray = [35, 43, 64, 46, 32, 73, 84];
var array = new ArrayManipulations();
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
//console.log(array.arraySplit(myArray));
