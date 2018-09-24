





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {"59":"","157":"","403":3.579741714288712e+307,";":460,"1.0738658441535886e+308":"BTi`","":"*]F<A","J":1.7916068789800633e+308,"1.3475238721996065e+308":3.123817678674708e+307}
base_0[3][6] = null
base_0[3] = 1.4344059050378579e+308
return a-b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = ""
return a/b/c
};
var argument4 = "l";
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = null
return a+b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][7] = ""
argument8[3][3] = false
return a/b+c
};
var argument8 = true;
var argument9 = [0,-1,618,0,213,25];
var base_0 = ["eMR","SG","i_","2","S^","C0w$",")I4","c","R"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["eMR","SG","i_","2","S^","C0w$",")I4","c","R"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["eMR","SG","i_","2","S^","C0w$",")I4","c","R"]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["eMR","SG","i_","2","S^","C0w$",")I4","c","R"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test923.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)