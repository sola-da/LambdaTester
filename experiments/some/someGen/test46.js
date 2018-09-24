





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = true
base_0[2] = ["*","-_","hF","b","<P","dYV","Rfj0f"]
argument3 = {"403":1.3569658157443155e+308,"893":"R","1.5390313505684444e+308":1.122196014751128e+308,"":"","^":7.495881670537716e+307,")":627}
return a+b/c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = "s"
base_1 = [595,"3",783,1.7976931348623157e+308,"W",0,"ZH",242,5e-324]
return a/b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = ""
base_2[3] = ""
base_2['length'] = null
return a-b*c
};
var argument7 = false;
var argument8 = 4.408528490945499e+306;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = null
base_3['length'] = [627,59,893,460,823]
argument11 = 3.5025234456115496e+307
return a-b*c
};
var argument10 = 6.177981339232517e+307;
var argument11 = "M";
var base_0 = [823,714,157,705,100]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,714,157,705,100]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,714,157,705,100]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,714,157,705,100]
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
require("fs").writeFileSync("./experiments/some/someGen/test46.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)