





var callbackArguments = [];
var argument1 = true;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = ["1","G:"]
argument2[82] = ["`","qZj","[*","{",242,607,"#v",893]
argument3[3] = false
return a*b+c*d
};
var argument5 = null;
var argument6 = [157,"p","?*Uc","l","Wjj",618,618];
var argument7 = [59,100,403,460,893,100,49,595,607,100];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = {"":7.040513376717631e+307,"Y":1.0056714420171339e+308,"z":3.1246062673320567e+307}
return a-b+c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = null
return a+b-c*d
};
var argument10 = [122,-100,969,49,705,-1,122,-1];
var argument11 = false;
var argument12 = false;
var argument13 = false;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13['*c'] = null
base_3[0][4] = {"783":3.9895022445574034e+307,":8":1.0249241136007476e+308,"jn":595}
return a+b/c+d
};
var base_0 = [783,783,-1,242,25,157,460,460,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,783,-1,242,25,157,460,460,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,783,-1,242,25,157,460,460,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,783,-1,242,25,157,460,460,893]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test370.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)