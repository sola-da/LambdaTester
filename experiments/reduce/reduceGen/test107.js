





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = null
base_0[4] = {"1":"n","655":595,"s":59,"1.497695067848585e+307":"P8lMW","":""}
argument1 = null
return a*b*c+d
};
var argument2 = 783;
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = false
return a-b*c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = 1.55349194940508e+308
return a/b/c/d
};
var argument7 = null;
var argument8 = r_0;
var argument9 = null;
var argument10 = false;
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[4] = ""
argument9[4] = true
return a*b-c-d
};
var base_0 = ["4&","8","iG)@5_P","@","nKk:=","&",403,213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4&","8","iG)@5_P","@","nKk:=","&",403,213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4&","8","iG)@5_P","@","nKk:=","&",403,213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["4&","8","iG)@5_P","@","nKk:=","&",403,213]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test107.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)