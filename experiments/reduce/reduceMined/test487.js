





var callbackArguments = [];
var argument1 = function (memo, val) {
 callbackArguments.push(arguments) 

    return memo ? memo[val] : undefined;
};
var argument2 = {"823":"","1.7976931348623157e+308":1.3203768818514431e+308,"1.0926725297658841e+307":"tK","":1.7018527294435368e+308,"1.6810309921699507e+308":460,"1.248696891836384e+308":1.3137948998595314e+308,"1.7765705077828418e+308":-100,";O":1.0263236799540323e+308};
var argument3 = true;
var argument4 = function (ret, name) {
 callbackArguments.push(arguments) 

    ret[name] = genesis.lookupType(fields[name]);
    keys.push(name);
    offsets[name] = bytes;
    bytes += ret[name].bytes;
    return ret;
};
var argument5 = function (sum2, datum) {
 callbackArguments.push(arguments) 

    var value = datum.atoms[dimName].value;
    isAbs && 0 > value && (value = -value);
    return null != sum2 ? sum2 + value : value;
};
var argument6 = true;
var argument7 = 1.7964264499723414e+308;
var argument8 = function (prev, curr) {
 callbackArguments.push(arguments) 

    return prev.concat(curr.ast.body);
};
var base_0 = ["4","@",607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4","@",607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4","@",607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["4","@",607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test487.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)