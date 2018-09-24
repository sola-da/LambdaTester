





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2][783] = 1.7065189270744407e+308
return a+b*c
};
var argument2 = "";
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = true
return a*b/c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = false
argument8[49] = {"122":"I","618":783,"783":"Q)L",",l%":100,"1.1966126807420096e+307":1.279921647679806e+308,"":"Ckat&","7.247958284474968e+307":1.2988714868058206e+308}
argument7[969] = {"49":"-&","242":-1,"4.700396138118237e+307":6.439434554408713e+307,"v":"","N":"","":25,"-100":59,"8.576441288358956e+307":3.8867350549869704e+307," Q:":"","1.3973157009048035e+308":"u[AC"}
return a-b/c
};
var argument7 = [213,122,655,595,242,157];
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1.1030928633982176e+308] = 0
return a/b-c
};
var argument10 = r_2;
var argument11 = [705,5e-324,783,157,126,100,783];
var base_0 = ["BS_`","A","6","<","!","_2:","{"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["BS_`","A","6","<","!","_2:","{"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["BS_`","A","6","<","!","_2:","{"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["BS_`","A","6","<","!","_2:","{"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test872.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)