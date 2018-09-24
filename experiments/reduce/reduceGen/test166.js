





var callbackArguments = [];
var argument1 = {"969":6.872941767595744e+307,"1.7456816578636016e+308":"2","":403,"'":1.5847438130256285e+308,"9.569002985309172e+307":""};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = "q[v"
base_0[5] = 627
base_0[0][4] = null
return a-b/c-d
};
var argument5 = -1;
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = [157,157,893,59]
base_1['length'] = ""
argument5[4] = "V<E"
return a*b/c/d
};
var argument9 = r_0;
var argument10 = r_0;
var argument11 = "";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = null
argument10[1] = [655,-1]
argument10[25] = 1.2159940697570541e+308
return a-b+c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = 1.7976931348623157e+308
argument14[403] = 49
argument15[627] = {"403":""}
return a/b/c*d
};
var argument14 = null;
var base_0 = ["2]F","VrZ","0",",","8","Yr","o","#Kv","E"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2]F","VrZ","0",",","8","Yr","o","#Kv","E"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2]F","VrZ","0",",","8","Yr","o","#Kv","E"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2]F","VrZ","0",",","8","Yr","o","#Kv","E"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test166.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)