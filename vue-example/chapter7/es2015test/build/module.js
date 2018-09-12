"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var a = 100;
var obj = {
    getA: function getA() {
        return a;
    },
    setA: function setA(a1) {
        a = a1;
    }
};
var setA = function setA(a1) {
    a = a1;
};
var getA = function getA() {
    return a;
};

// export {getA, setA};
exports.default = obj;
// 하나 export 할때 이렇게 export