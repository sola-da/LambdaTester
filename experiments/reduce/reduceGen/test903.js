





var callbackArguments = [];
var argument1 = null;
var argument2 = {"213":5.63326769155028e+307,"893":2.269659199644232e+307,"P":"5qAM","k":"zIo","B":122};
var argument3 = 8.298751909972843e+307;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5.71178064163152e+307] = null
return a*b*c-d
};
var argument5 = null;
var argument6 = null;
var argument7 = ["d","Tb","R","5","s","+yG","p :w","a)"];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = false
base_1[1][3] = {"B":1.787460568827455e+308,"Y+z":1.7976931348623157e+308,":6h{:":6.121656247518916e+307}
argument5[893] = {"157":1.76927383548429e+308,"823":"","s":"","":1.1467802673152372e+308,"1.0035043722209784e+308":"","8.494032447009567e+307":"Pz"}
return a*b-c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = ""
return a/b+c/d
};
var argument10 = r_0;
var argument11 = false;
var argument12 = false;
var argument13 = "";
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[1.4205726959827606e+308] = null
argument11[2.1280896016417002e+307] = "d"
return a-b*c+d
};
var base_0 = [100,100,-1,460,126,618,157,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,100,-1,460,126,618,157,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,100,-1,460,126,618,157,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,100,-1,460,126,618,157,59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test903.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)