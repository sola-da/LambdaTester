





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = null
argument2[-1] = false
argument2[8] = 100
return a+b+c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.377960715099946e+307] = {"49":1.613094046278566e+308,"82":"","":"","1.9949931555164282e+307":"V","s":"","1.1068889645363375e+308":"","1.5390848666951554e+308":-100,"Y-?":""}
argument4[3.7668525981726295e+307] = [-100,595,714,969]
return a*b*c
};
var argument4 = null;
var argument5 = {"":"","1.1260279187417185e+308":3.0782207824358034e+307,"(E":"","1.7976931348623157e+308":"","1.7076285083477154e+308":1.2889009318242648e+308,"4H":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['AO?'] = "28'"
argument7[3] = "G"
argument8[6] = {}
return a-b/c
};
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = "C-"
base_3[1][0] = null
return a*b*c
};
var base_0 = [783,122,"dQ","0+q",0]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,122,"dQ","0+q",0]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,122,"dQ","0+q",0]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,122,"dQ","0+q",0]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test566.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)