





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['L'] = true
base_0[4][1.7976931348623157e+308] = true
return a+b/c/d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = null
base_1[4][1.7976931348623157e+308] = {"25":607,"157":"_6","618":"7q(","":705,"1.0777040215416302e+308":3.8390800913176774e+307,"`8X":4.505814523155087e+307}
base_1[2][2.819898637310108e+307] = false
return a-b+c*d
};
var argument4 = null;
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.286160553564105e+307] = ""
argument8[0] = 5.537219623284008e+307
return a+b+c+d
};
var argument7 = [213,783,126,59,607,25,59];
var argument8 = r_1;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = null
base_3[1][5] = 2.8379177783916387e+307
base_3[4][1.7976931348623157e+308] = ["^","wKI<",5e-324,783,655,213]
return a+b-c/d
};
var base_0 = [126,714,607,893,783,893,157]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,714,607,893,783,893,157]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,714,607,893,783,893,157]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,714,607,893,783,893,157]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test605.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)