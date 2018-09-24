





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = false
base_0[3][7] = false
base_0[5] = ["I3","K","9","#P"]
return a/b/c
};
var argument2 = {"7.437404078091359e+307":595,"b":843,"1.65501477311899e+308":1.5071440758981804e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = null
return a+b*c
};
var argument4 = r_0;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['!j'] = false
base_2[0][6] = 655
argument8['AA@'] = 1.5420205416190747e+308
return a-b-c
};
var argument7 = false;
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3.7668525981726295e+307] = true
base_3[0][6] = ""
base_3[5] = 618
return a+b/c
};
var argument10 = false;
var base_0 = [49,607,460,213,618,714,0,1.7976931348623157e+308,655]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,607,460,213,618,714,0,1.7976931348623157e+308,655]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,607,460,213,618,714,0,1.7976931348623157e+308,655]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,607,460,213,618,714,0,1.7976931348623157e+308,655]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test333.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)