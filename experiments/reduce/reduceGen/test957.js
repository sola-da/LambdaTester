





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = 627;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = null
base_0[0][4] = null
argument2[403] = true
return a/b-c/d
};
var argument5 = {"49":"wbk","":893,"+6":9.68745065117858e+307,"I)Yu|4":"CNf","1.7318335481783342e+308":7.598923832733149e+307};
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[126] = {"403":"","893":"B","":"2","D":"*W","3.5559307506764105e+307":627,"7.261641737708421e+307":49}
base_1[1][3] = 0
base_1[3] = ["&(",213]
return a-b-c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = "K*"
argument11['*c'] = 6.217262292946511e+306
return a/b/c-d
};
var argument10 = false;
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[3] = "7h"
return a-b/c/d
};
var base_0 = ["%P","(","?","6VkS"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%P","(","?","6VkS"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%P","(","?","6VkS"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%P","(","?","6VkS"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test957.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)