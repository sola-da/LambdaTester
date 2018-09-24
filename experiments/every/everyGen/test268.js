





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[122] = -100
return a/b+c
};
var argument2 = 1.7665866170196376e+308;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = 8.711594419890992e+307
argument6[2] = ["]k","g%;","mGM","5[p"]
argument5 = {"1.5142837561037734e+308":893,"-100":"","n":1.6126112213832594e+308,"3.275840543545729e+307":1.0872355614047976e+308,"":4.27881565499769e+307}
return a+b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = ""
return a/b/c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = {"157":893,"213":607,"5.488884905446732e+307":"","M4M":"","-100":5.175367241814264e+307,"":"Zdk&","n,":",m","Z":""}
argument8[0] = {"59":"","242":"4","595":"","1.6828979215074786e+308":403,"":"","Pg":714,"hA":"7?'"}
argument8[122] = true
return a-b+c
};
var argument8 = r_0;
var argument9 = null;
var base_0 = [783,0,618,655]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,0,618,655]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,0,618,655]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,0,618,655]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test268.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)