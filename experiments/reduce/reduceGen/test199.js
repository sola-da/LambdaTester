





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = null
argument2[2] = true
argument1['Cb'] = 2.11404794237361e+307
return a*b-c+d
};
var argument2 = 1.2820407899991912e+308;
var argument3 = 6.099462776019002e+307;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = null
base_1[0][9.12287810829114e+307] = {"122":7.459432243741982e+307,"1.4910236985878668e+308":595}
return a/b-c-d
};
var argument5 = "";
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = {"1.4672622968391415e+308":6.37028533212536e+307,"":""}
base_2[9] = ["X#C",783,82,783,705,"&=x=h"]
base_2[2] = 213
return a+b*c*d
};
var argument8 = 9.883851566695801e+307;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[25] = null
argument10 = null
return a-b*c/d
};
var argument11 = "y";
var base_0 = [627,"]","Iev","B"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,"]","Iev","B"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,"]","Iev","B"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,"]","Iev","B"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test199.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)