





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4.960033715165713e+307] = null
argument2[1.3599216339661573e+308] = "kx"
base_0[7] = null
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8] = 0
argument4[3] = 213
return a-b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.3156198695370476e+307] = 9.368753444014933e+307
base_2[6] = true
argument4['io'] = 823
return a/b/c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = "1"
argument6[122] = [0,100,595,893,595,655]
argument6[783] = ""
return a*b+c
};
var argument6 = true;
var argument7 = null;
var base_0 = ["P&,H","#,fhN@i","r<","D>","y","Q"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P&,H","#,fhN@i","r<","D>","y","Q"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P&,H","#,fhN@i","r<","D>","y","Q"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P&,H","#,fhN@i","r<","D>","y","Q"]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test700.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)