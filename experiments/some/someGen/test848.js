





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = ";:"
argument2[3] = null
return a/b-c
};
var argument2 = {"122":1.5824407605943037e+308,"714":"","1.71868719853505e+307":2.2491811798731453e+307,"+((eJ!":7.40509495507413e+307,"1.5635064171602145e+308":1.0404369388181432e+308,"":1.7437551625733495e+308,"`":"kn","lJ":"3","1.3387386638462885e+308":8.162107404727807e+307,"y{%":6.454049417610363e+307};
var argument3 = ["Z",",","m_3OP",",","4","MX","AL]"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[618] = 3.1454257316548046e+307
base_1[1] = null
argument5[1.5109538778533692e+308] = ["e",82,"e",969,714]
return a/b/c
};
var argument5 = r_1;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[705] = "g9"
base_2[3][4] = null
base_2[3] = true
return a*b/c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['j'] = null
argument10[157] = true
return a/b/c
};
var argument10 = null;
var argument11 = null;
var base_0 = ["<","dpC","V",";","eMe_"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<","dpC","V",";","eMe_"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<","dpC","V",";","eMe_"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<","dpC","V",";","eMe_"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test848.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)