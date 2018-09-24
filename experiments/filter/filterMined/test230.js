





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x.error;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return 1;
};
var argument3 = function () {
 callbackArguments.push(arguments) 

    return 1;
};
var argument4 = {"705":1.0135003480084612e+308,"9.050177264162202e+307":"","1.2271204989851682e+308":969,"":403};
var argument5 = 59;
var argument6 = function (ok) {
 callbackArguments.push(arguments) 

    if (~ok.indexOf('*'))
        return 0 == key.indexOf(ok.split('*')[0]);
    return key == ok;
};
var argument7 = 607;
var argument8 = {"0":0,"100":"","618":"","f`d#":"1","":8.575765443877852e+307,"lo":7.780138533208252e+306,"1.3931479206101707e+308":"q","1.1366634720610106e+308":82};
var base_0 = ["?DP",823,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?DP",823,607]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?DP",823,607]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test230.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)