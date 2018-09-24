





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = "|"
argument3['HMm'] = [705,-1,403,823,607]
argument2[0] = null
return a-b/c-d
};
var argument2 = null;
var argument3 = [-1,"p",460,"Lz>",893,">;","83","4",0,"c"];
var argument4 = null;
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = {"100":6.906815221625037e+307,"157":"^:","627":"","705":4.676713729190176e+307,"823":1.7045437983583908e+308,"":"=;","<":"T"}
argument3[2.1280896016417002e+307] = [157,1.7976931348623157e+308,242]
argument5[0] = [714,100,"@",49]
return a+b/c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = ""
argument8[2] = null
return a/b*c*d
};
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['*c'] = false
return a/b*c-d
};
var argument10 = ["Mw^","l","n","Q","K","]"];
var base_0 = ["4","|t`","&","_"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4","|t`","&","_"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4","|t`","&","_"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["4","|t`","&","_"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test501.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)