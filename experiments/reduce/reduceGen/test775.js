





var callbackArguments = [];
var argument1 = {"25":3.186899768610034e+307,"7.034188244658482e+307":"Ec","":-100,"%&":1.2505735981017651e+308,"MD":"","1.5507074564004071e+308":4.309951696095382e+306,"1.5084968277065495e+308":"","k0":""};
var argument2 = r_0;
var argument3 = [")","!","&","{{",122];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = [157,618,213,-100,100]
return a-b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = true
return a*b+c-d
};
var argument6 = false;
var argument7 = r_2;
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b*c*d
};
var argument10 = null;
var argument11 = r_3;
var argument12 = r_3;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2.1869172855352885e+307] = null
argument11[1.1277822633002616e+308] = "X("
argument12[595] = "Q9eZ"
return a*b*c-d
};
var base_0 = [126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test775.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)