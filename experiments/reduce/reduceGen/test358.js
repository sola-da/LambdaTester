





var callbackArguments = [];
var argument1 = true;
var argument2 = true;
var argument3 = [618,843,157,157,1.7976931348623157e+308];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = [0]
argument2[3] = null
return a+b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = 843
base_1[0][0] = {"100":618,"157":"","783":1.7976931348623157e+308,"$A":"*","":705,"1.0146725055966775e+308":25,"1.5129431215635945e+308":",","-100":5e-324}
return a*b+c-d
};
var argument6 = [655,595,0,">",655,0,"L","Sqsg-"];
var argument7 = true;
var argument8 = r_0;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = ""
argument7[';N'] = 1.7801920266139884e+308
return a*b*c+d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[4] = 1.5515806269561232e+308
argument12[25] = {"LZ<QJ":"(nyW"}
argument11[213] = [714,0,100,714,126,122,0]
return a+b/c+d
};
var argument11 = r_3;
var argument12 = null;
var base_0 = [627,655,0,893,126,122,100,0,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,655,0,893,126,122,100,0,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,655,0,893,126,122,100,0,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,655,0,893,126,122,100,0,783]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test358.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)