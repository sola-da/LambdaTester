





var callbackArguments = [];
var argument1 = false;
var argument2 = [242,242,627,969,157,618,100];
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = 7.79532591739944e+307
base_0[7] = 1.1691544490718148e+308
return a-b-c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[-1] = ["6U"," ?KyW",843,"K?ER","F2",618,"Q+",595,1.7976931348623157e+308]
return a+b*c*d
};
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = "l>"
argument8[8] = true
argument8[7.463432409233234e+307] = [607,714,705,627,100,59,595]
return a-b-c+d
};
var argument8 = null;
var argument9 = false;
var argument10 = null;
var argument11 = 893;
var argument12 = {"25":"","49":"","460":"4e","":"","-1":"n","1.7976931348623157e+308":8.837424119327388e+307,"Lz7P:":1.7281171790518423e+308,"1.389821733756398e+308":59};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = null
return a-b+c-d
};
var base_0 = ["QEH-","^","zt",",gB","h","pdTn","Nd"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["QEH-","^","zt",",gB","h","pdTn","Nd"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["QEH-","^","zt",",gB","h","pdTn","Nd"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["QEH-","^","zt",",gB","h","pdTn","Nd"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test887.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)