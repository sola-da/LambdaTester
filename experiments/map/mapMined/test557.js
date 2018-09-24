





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    return dijit.byNode(n);
};
var argument2 = {"9":5.967415330871946e+307,"242":"{[*a ","460":"%","":3.928820411600639e+307,"1.7946151203378868e+308":1.6134154063521242e+308};
var argument3 = false;
var argument4 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument5 = {"@":"","2.1869172855352885e+307":595,"2.277641977158732e+307":")","z":8.979613759924138e+307};
var argument6 = function (evt) {
 callbackArguments.push(arguments) 

    return evt + '.webshimspolyfill';
};
var argument7 = r_2;
var argument8 = function (value) {
 callbackArguments.push(arguments) 

    if (value instanceof BigNumber) {
        asBigNumber = true;
        value = value.toNumber();
    }
    if (!isNumber(value) || !isInteger(value) || value < 0) {
        throw new Error('Parameters in function eye must be positive integers');
    }
    return value;
};
var argument9 = ["@w",403,100,242,25,242,"2",0,"7"];
var base_0 = ["AXxi",1.7976931348623157e+308,969,"@",714,")m-",705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["AXxi",1.7976931348623157e+308,969,"@",714,")m-",705]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["AXxi",1.7976931348623157e+308,969,"@",714,")m-",705]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/map/mapMined/test557.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)