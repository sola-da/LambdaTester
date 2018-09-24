





var callbackArguments = [];
var argument1 = null;
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = false
return a-b*c-d
};
var argument5 = 1.4339439873089622e+308;
var argument6 = 6.581004465087028e+307;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[460] = true
argument7[4] = 1.322100675385112e+308
argument7[4] = "B"
return a/b-c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][0] = ""
argument10[-1] = false
argument11['18{'] = null
return a+b/c*d
};
var argument10 = 1.5447390085837402e+308;
var argument11 = {"157":"%u","714":"VT","4.578292124222585e+307":"E","":1.639577999873068e+308,"y}":6.551022290846595e+307};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[5] = true
argument12[0] = {}
return a-b-c*d
};
var argument13 = null;
var base_0 = [213,-100,126,607,82,25,783,403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,-100,126,607,82,25,783,403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,-100,126,607,82,25,783,403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,-100,126,607,82,25,783,403]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test763.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)