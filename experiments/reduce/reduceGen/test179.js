





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = ["t",607,"Y",">cW ",714,"%E"]
argument2[627] = {"122":8.930777152491079e+307,"403":"pPG","1.3764009466606968e+308":5.103642373453529e+307,"w6":1.2978645857936952e+308}
return a-b+c*d
};
var argument5 = null;
var argument6 = [403,893,-1,25,122];
var argument7 = [823,893,100,1.7976931348623157e+308,655];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = 3.992684382040883e+307
base_1[0][4] = ""
argument6[25] = {"1.4436386630119981e+308":"!"}
return a/b-c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = 49
return a*b-c/d
};
var argument10 = true;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13 = ""
argument12[0] = true
base_3 = ""
return a*b-c*d
};
var base_0 = [157,49,655,25,714,0,-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,49,655,25,714,0,-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,49,655,25,714,0,-100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,49,655,25,714,0,-100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test179.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)