





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = 2.4289152055207454e+306
argument3[2.4183178393969103e+306] = ["hl","]Mo*=","?U"]
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = null
argument2 = true
return a/b/c
};
var argument3 = r_1;
var argument4 = {"618":"^","N":"","%_hJ":"",")":823,"5.605298700004801e+307":1.1112802318541454e+308,"":"[","-1":"","8.725017867436459e+307":"E[","1.3172771731261463e+308":"Z","8.258738505311251e+307":627};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['io'] = null
return a*b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = null
base_3[9] = false
return a/b-c
};
var argument7 = null;
var base_0 = [25,893,1.7976931348623157e+308,5e-324,25,893,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,893,1.7976931348623157e+308,5e-324,25,893,969]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,893,1.7976931348623157e+308,5e-324,25,893,969]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,893,1.7976931348623157e+308,5e-324,25,893,969]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test630.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)