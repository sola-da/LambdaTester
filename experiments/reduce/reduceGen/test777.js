





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = 1.7739007772530298e+308
return a+b-c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[655] = ""
return a/b/c*d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7] = 1.5932698761643454e+308
argument5[1.359136872727139e+308] = "t"
return a+b+c/d
};
var argument4 = {"1.5284734561224781e+308":403,"K":100,"1.2743434279508294e+308":"{","":"c9"};
var argument5 = false;
var argument6 = null;
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = 6.359302440728044e+307
argument7[5] = false
base_3[1][0] = [843]
return a+b*c-d
};
var base_0 = [1.7976931348623157e+308,122,59,823,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,122,59,823,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,122,59,823,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,122,59,823,82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test777.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)