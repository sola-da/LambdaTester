





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['A'] = 714
argument1 = ["(V","e","e","z}","^T|","qr","F"]
base_0[1][1] = [655]
return a*b*c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = true
base_1[9] = null
return a-b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = false
return a*b-c
};
var argument5 = "7J";
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = 157
return a/b+c
};
var base_0 = [705,"0x","td","x"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,"0x","td","x"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test74.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)