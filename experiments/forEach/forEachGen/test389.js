





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['U+WQ'] = 618
base_0[4] = 1.1483938206578753e+308
base_0[6] = [157,969]
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = false
argument2[7.92397107964922e+307] = {"49":"=:+kFe","100":1.0929365497251287e+308,"843":627,"1.0029598103588784e+308":">pvL","6.277379982368375e+307":3.9285960188693716e+307,")y9Y":1.7976931348623157e+308,"":"ZOj4%","h":1.7448806909138166e+308}
return a*b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][4] = null
argument4[2] = null
return a/b+c
};
var argument4 = "k%";
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = [705,"b",714,122,"JUg","B",893,"d}",-1,"_"]
return a-b*c
};
var argument7 = null;
var argument8 = null;
var base_0 = [714,"29};yY",607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"29};yY",607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"29};yY",607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"29};yY",607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test389.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)