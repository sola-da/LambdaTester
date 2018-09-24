





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.463432409233234e+307] = null
argument2[213] = {"403":59,"":"|","1.5718461745617677e+308":607,"3.920585024533693e+307":"T9","S":403,"8.258285429405853e+307":242,"6.212477823489754e+307":"-&","U3":"","1.703102139996846e+308":"","1.1689206600940957e+308":823}
argument2[627] = [783,403,823,"`6"]
return a-b/c*d
};
var argument2 = "kL";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[25] = {"618":"H|","893":"","%|":8.849152746822866e+307,"1.02312660895403e+308":"l7","V(":"c","3.5492707584077094e+307":"","":"<","S`":1.4613961919806077e+308}
return a/b+c-d
};
var argument4 = null;
var argument5 = r_0;
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = [49,783,213]
argument4 = "a"
base_2[7] = {"714":1.5528341936902333e+308,"":3.093341576226778e+307,"e":"a3"}
return a/b/c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = 4.2264740128181805e+307
argument8[1] = {";":"","":"([+","sL=GjC@@X":"","f":"F"}
argument9[25] = false
return a/b-c+d
};
var argument9 = r_3;
var base_0 = [122,59,618,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,59,618,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,59,618,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,59,618,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test146.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)