





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = "N"
argument1 = null
argument2[4] = {}
return a-b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['io'] = ""
return a*b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = "X"
base_2[0][0] = 1.7387118531260961e+308
argument5 = 2.877943323730759e+307
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 6.587097714038852e+307
return a+b/c
};
var base_0 = [")Jn","J"," B","P",">","3&1-p","2","s","Y"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")Jn","J"," B","P",">","3&1-p","2","s","Y"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")Jn","J"," B","P",">","3&1-p","2","s","Y"]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")Jn","J"," B","P",">","3&1-p","2","s","Y"]
var r_3= undefined
try {
r_3 = base_3.every(argument5)
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
require("fs").writeFileSync("./experiments/every/everyGen/test466.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)