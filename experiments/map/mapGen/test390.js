





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = "&"
argument3[607] = 242
base_0[3][2] = {"25":"!e","157":893,"242":" ","":1.6122315128597407e+308,"1.0911137541949907e+308":"tRf-1){Tn!b]Q","1.767169866436001e+307":9.89661325658586e+307,"1.5233915923100535e+307":5.382901884287171e+307}
return a/b*c
};
var argument2 = 403;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = true
argument5[618] = 893
argument6[7] = "E!ypg"
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][2][5] = false
base_2[9] = true
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = true
return a*b/c
};
var base_0 = ["gutv)]","<","k","v","m","(","7","%","DMi","f23"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["gutv)]","<","k","v","m","(","7","%","DMi","f23"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["gutv)]","<","k","v","m","(","7","%","DMi","f23"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["gutv)]","<","k","v","m","(","7","%","DMi","f23"]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test390.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)