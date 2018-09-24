





var callbackArguments = [];
var argument1 = function (handler) {
 callbackArguments.push(arguments) 

    handler.call(null, args);
};
var argument2 = function (r, i) {
 callbackArguments.push(arguments) 

    if (tr == r) {
        trIndex = i;
    }
};
var argument3 = false;
var argument4 = 2.5904966959316607e+307;
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    if (key === 'parent' || !node[key])
        return;
    node[key].parent = node;
    traverse(node[key], cb);
};
var argument6 = {"8":"d","618":"","":"h",";":627,"9.643093834316737e+307":")D","1.1734734388724397e+307":"Y{tNO","g":1.7976931348623157e+308};
var argument7 = 9.492036650764367e+307;
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    if (typeof pending[item.rev] !== 'undefined') {
        pending[item.rev].resolve({ rev: item.rev });
        delete pending[item.rev];
    } else {
        bufferChange(item.rev);
    }
};
var argument9 = r_0;
var base_0 = ["G","%","Qt9","(","8mN","_nU","}","{","Fgv"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["G","%","Qt9","(","8mN","_nU","}","{","Fgv"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["G","%","Qt9","(","8mN","_nU","}","{","Fgv"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["G","%","Qt9","(","8mN","_nU","}","{","Fgv"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test909.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)