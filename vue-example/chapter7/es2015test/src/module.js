let a = 100;
let obj = {
    getA : function() {
        return a;
    },
    setA : function(a1) {
        a = a1;
    }
}
let setA = function(a1) {
    a = a1;
}
let getA = function() {
    return a;
}

// export {getA, setA};
export default obj;
// 하나 export 할때 이렇게 export