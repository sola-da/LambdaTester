





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = 4.0345259906235977e+307
return a+b*c
};
var argument2 = 969;
var argument3 = -100;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = "j"
base_1[3] = 0
base_1 = {"25":126,"":"Q","6.743956664310123e+307":""}
return a*b+c
};
var argument5 = {"-":"OS","":1.7945908744122196e+307,">":9.975457392247751e+307,"&":"U"};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['j'] = ""
argument9[122] = "C"
return a+b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = 843
argument8[2] = [100,783,705]
return a/b+c
};
var argument9 = null;
var base_0 = [893,"a",122,595,82,213,"[",213,"_",213]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"a",122,595,82,213,"[",213,"_",213]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"a",122,595,82,213,"[",213,"_",213]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"a",122,595,82,213,"[",213,"_",213]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test395.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)