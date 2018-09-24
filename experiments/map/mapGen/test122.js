





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = null
return a*b/c
};
var argument2 = "";
var argument3 = {"893":"","Sk":213,"-1":"*MtLT09","":49,"1-^":6.404927321759736e+307,"ZBx":1.7596879381036579e+308,":":"!"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = null
argument5['A'] = ""
return a-b-c
};
var argument5 = null;
var argument6 = 242;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = -1
argument9[157] = ["&","g"]
return a/b-c
};
var argument8 = r_2;
var argument9 = r_2;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][7] = ["*&"]
base_3[6] = [403,0,705,"g"]
return a-b/c
};
var argument11 = null;
var argument12 = true;
var base_0 = [157,126,49,595,49,655,1.7976931348623157e+308,595,969]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,126,49,595,49,655,1.7976931348623157e+308,595,969]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,126,49,595,49,655,1.7976931348623157e+308,595,969]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapGen/test122.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)