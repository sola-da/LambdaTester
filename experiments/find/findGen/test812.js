





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.1881593224845412e+308] = ""
argument3[460] = null
argument2[0] = 242
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = ["y3hab7[","Zu","#","xBt","c4CP","],","f","1w"]
argument3[5] = false
return a/b-c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a+b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['!j'] = {}
argument6[25] = 1.7415237939037258e+308
return a-b/c
};
var base_0 = ["j","=n!v","kJ","3f","["]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j","=n!v","kJ","3f","["]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j","=n!v","kJ","3f","["]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j","=n!v","kJ","3f","["]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test812.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)