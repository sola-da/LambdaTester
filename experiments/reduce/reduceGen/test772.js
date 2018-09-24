





var callbackArguments = [];
var argument1 = 893;
var argument2 = {"893":"b","CF_":"Y?oieiF","1.7941048487843073e+308":823,"1.2714352803945234e+308":"","4.490293383351288e+307":"","P)O":"","":714};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.3938918493123786e+308] = {"5.530445082820941e+306":"L","IL[r^G":705,"1.485858074306758e+308":1.3253463407324289e+308,"1.758910087060746e+307":"","UB":1.2441252354593066e+308,"q2i":"","":6.730289538758601e+307}
argument2[7] = "m"
return a+b+c/d
};
var argument5 = null;
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = null
argument7[90] = ""
return a*b/c-d
};
var argument9 = true;
var argument10 = true;
var argument11 = [618,-1,705,25,403,49,122,25];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1.359136872727139e+308] = 595
base_2[8] = ["Z","I|","02","|","Q","t","c"]
base_2[0] = {"":"","?":4.400269061629711e+307}
return a-b-c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[627][126] = {"627":3.092494627217287e+307,"1.762168637744367e+308":"","":1.633237485947581e+308,"B":-100,":?":"","L":8.905480261859675e+307,"4.545262442184417e+307":""}
argument15[627] = false
argument14[7] = "6"
return a-b/c+d
};
var argument14 = null;
var base_0 = ["Y-","!","xk`",";`"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Y-","!","xk`",";`"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Y-","!","xk`",";`"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Y-","!","xk`",";`"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test772.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)