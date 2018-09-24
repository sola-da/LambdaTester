





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"460":1.7674402989886001e+308,"969":"ZU8","1.7464366462492912e+308":7.12830450497949e+307,"2.5365369177796426e+307":1.7976931348623157e+308,"":"=5"," 2yVL":"GeRv#","d<":"5M$","|":618,"O{rL":""}
return a+b/c
};
var argument2 = "J";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1.4677087964888306e+308] = ""
argument4[2] = ""
return a+b*c
};
var argument4 = false;
var argument5 = 3.088731118532497e+307;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = null
argument7[403] = "5!"
return a*b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = "V"
base_3[9] = null
base_3[3] = false
return a-b/c
};
var argument8 = false;
var base_0 = ["S9","Y","Y","J","g","?","2","D8 ?","P","YWDR%"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S9","Y","Y","J","g","?","2","D8 ?","P","YWDR%"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S9","Y","Y","J","g","?","2","D8 ?","P","YWDR%"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test121.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)