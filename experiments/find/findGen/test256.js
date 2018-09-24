





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = null
return a*b*c
};
var argument2 = {"627":2.5752525941970034e+307,"843":"","":1.2505219157605255e+308,"|y":"P7"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = "Z"
return a-b+c
};
var argument4 = {"213":7.636189325906292e+307,"403":714,"1.4643980791775014e+308":655,"7.992786139696397e+307":5e-324};
var argument5 = 1.3187429549380001e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['!j'] = {"126":100,"655":4.453773288167034e+307,"893":9.049759773852002e+307,"1.3555749636832502e+308":"3aA","":"Cj","4.894431419864256e+307":"","[e":100,"1.2870770546619427e+308":"","1.3407979130863208e+308":9.44575866993825e+307}
base_2[5] = null
argument7[1.399309004356655e+308] = false
return a-b*c
};
var argument7 = null;
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[4.953791384496108e+307] = false
argument11[3] = 5.904495945954163e+307
return a*b/c
};
var argument10 = r_2;
var argument11 = [100,213,157,969,59,242,823,705];
var base_0 = [823,-1,627,126,59,627,1.7976931348623157e+308,126,783]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,-1,627,126,59,627,1.7976931348623157e+308,126,783]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,-1,627,126,59,627,1.7976931348623157e+308,126,783]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,-1,627,126,59,627,1.7976931348623157e+308,126,783]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test256.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)