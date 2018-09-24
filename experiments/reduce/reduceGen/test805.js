





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = [122,-1,618,5e-324,460,893,100,0,843,714]
argument1[2.1280896016417002e+307] = false
base_0[1][3] = {"242":"","607":59,"6.898675368803997e+307":"-","4.2025645035627986e+307":460,"2!":"","":460}
return a+b/c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = null;
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][9.12287810829114e+307] = 1.044068178599084e+307
argument4[1] = false
argument4[7] = 3.0037347842505533e+307
return a/b-c-d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[82] = "V"
return a/b-c/d
};
var argument8 = r_2;
var argument9 = "";
var argument10 = r_3;
var argument11 = false;
var argument12 = r_1;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = ["|","YK","4","(t6","|","::","Nt_6","@","b"]
base_3 = 1.3726982225255175e+308
return a+b+c+d
};
var base_0 = [49,"B",242,100,0,403,"r"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"B",242,100,0,403,"r"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,"B",242,100,0,403,"r"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,"B",242,100,0,403,"r"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test805.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)