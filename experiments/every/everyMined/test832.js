





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument2 = 607;
var argument3 = function (other) {
 callbackArguments.push(arguments) 

    return _.contains(other, item);
};
var argument4 = function (def) {
 callbackArguments.push(arguments) 

    return def.message === 'ImplicitGlobalVariable';
};
var argument5 = 893;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument7 = {"25":"Pi","403":1.2840008892422456e+308,"607":"2","5.284410599211523e+307":"","6.472390455846257e+307":"","S%I":100,"":7.599179652518467e+307,"1.426061396655673e+308":595};
var argument8 = true;
var base_0 = [1.7976931348623157e+308,607,82,100,25,403]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,607,82,100,25,403]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,607,82,100,25,403]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,607,82,100,25,403]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyMined/test832.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)