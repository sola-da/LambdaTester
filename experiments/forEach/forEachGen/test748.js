





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.748669805137695e+307] = {"122":1.7976931348623157e+308,"5.667366834357572e+307":"","<e":"'V`'","":""}
base_0[0][0] = false
argument2[8.748669805137695e+307] = 6.447872559518298e+307
return a*b+c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = ""
return a+b*c
};
var argument5 = false;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['U+WQ'] = null
return a/b+c
};
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = [1.7976931348623157e+308,25,0,460,705,213]
argument9[2] = "90K"
argument10[8.639664788900972e+307] = {"49":"","82":"63","_":"","c":1.7479741940812345e+308,"?":"c","1.7976931348623157e+308":4.3848008056853766e+306,"A":82,"":6.545600784869693e+307}
return a-b+c
};
var argument10 = null;
var base_0 = [627,242,705,607,783,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,242,705,607,783,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,242,705,607,783,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,242,705,607,783,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test748.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)