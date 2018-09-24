





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['jo'] = {"'^":"3","":1.1284912974598615e+308,"B":"N","8.967889353963902e+307":8.019864960877489e+307,"9.886251483360554e+307":"X","%>%":":","1.7544801282580333e+308":"","7.653117713078874e+307":"","5.710507432193329e+307":1.1901287801877734e+307}
argument3[0] = 893
argument3[4] = "e"
return a*b*c
};
var argument2 = 2.6641704104758684e+307;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = 100
return a-b-c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = true
base_2[3] = {"157":714,"{h":"8%oh"}
return a/b*c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = null
argument7[3.377960715099946e+307] = ["W","V","Id","k","N","y5t>R)","Fh","p2,4="]
return a/b+c
};
var argument8 = null;
var argument9 = r_1;
var base_0 = [-1,82,714,893,893,627,460,5e-324,82]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,82,714,893,893,627,460,5e-324,82]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test514.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)