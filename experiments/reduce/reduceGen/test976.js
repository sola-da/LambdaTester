





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['l&'] = false
return a+b+c/d
};
var argument2 = null;
var argument3 = null;
var argument4 = false;
var argument5 = "KD2";
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = ""
base_1[9] = null
argument4[2.1280896016417002e+307] = "JPc"
return a/b+c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['*c'] = null
argument10[1.3938918493123786e+308] = {"59":"KEa=`","82":1.7570487846994224e+308,"403":126,"783":"M","2.7483638041648135e+307":1.1669132059374399e+308,"7bw":1.38869089316422e+308,"":843}
argument10[0] = [783,59,1.7976931348623157e+308]
return a/b+c*d
};
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[1] = 4.813557673444128e+307
argument10[1] = true
argument11[5.71178064163152e+307] = {"213":""}
return a/b*c-d
};
var argument11 = false;
var base_0 = [705,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,82]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test976.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)