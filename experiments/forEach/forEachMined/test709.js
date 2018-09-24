





var callbackArguments = [];
var argument1 = function (dimension) {
 callbackArguments.push(arguments) 

    var Dimension = dimension.substr(0, 1).toUpperCase() + dimension.substr(1);
    $.fn['inner' + Dimension] = ioDim(dimension, false);
    $.fn['outer' + Dimension] = ioDim(dimension, true);
};
var argument2 = function (prop) {
 callbackArguments.push(arguments) 

    if (typeof src[prop] !== 'undefined')
        target[prop] = compiler.abottom(src[prop], target[prop]);
};
var argument3 = true;
var argument4 = function (method) {
 callbackArguments.push(arguments) 

    xhr[method] = function () {
        return xhr.send.apply(xhr, [method].concat(d3_array(arguments)));
    };
};
var argument5 = {"82":":","403":"","627":25,"893":893,";":25,"":1.2571403592088237e+308,"3.934279746202561e+307":"Ov","V":"?","-1":"F"};
var argument6 = r_1;
var argument7 = function (f) {
 callbackArguments.push(arguments) 

    if (f[0] != '.') {
        arr.push(f);
    }
};
var argument8 = "dHV";
var argument9 = 1.3123865407992378e+308;
var base_0 = [100,"h",-100,"U","?$5W",-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"h",-100,"U","?$5W",-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"h",-100,"U","?$5W",-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,"h",-100,"U","?$5W",-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test709.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)