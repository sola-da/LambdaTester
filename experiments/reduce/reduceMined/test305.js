





var callbackArguments = [];
var argument1 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return util.mergeObjects(acc, parent.queryParams);
};
var argument2 = function (ret, name) {
 callbackArguments.push(arguments) 

    ret[name] = genesis.lookupType(fields[name]);
    keys.push(name);
    offsets[name] = bytes;
    bytes += ret[name].bytes;
    return ret;
};
var argument3 = null;
var argument4 = function (prev, curr) {
 callbackArguments.push(arguments) 

    return prev + curr.time;
};
var argument5 = false;
var argument6 = function (all, key) {
 callbackArguments.push(arguments) 

    all[key] = {};
    self._setTarget(filters[key], all[key]);
    return all;
};
var base_0 = ["@",714,-1,"@",126,"r","&","q(;ES"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@",714,-1,"@",126,"r","&","q(;ES"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@",714,-1,"@",126,"r","&","q(;ES"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@",714,-1,"@",126,"r","&","q(;ES"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test305.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)