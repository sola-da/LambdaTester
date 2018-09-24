





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[157] = 1.3818517948049002e+307
argument2[618] = {"126":"","618":3.072383445616112e+307,"783":"","":783,"F+":"","-1":""}
argument2[0] = null
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = {"J!T7":"=","":1.422761861618566e+308,"zHqbw":"","q":"","Ce":"<","-1":"k","1.4441121106467468e+308":""}
argument3[1] = 1.381549788853069e+308
argument3[49] = null
return a+b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = {"49":"|","783":"","823":6.731062239147249e+307,"893":843,"969":"","utT8?":122,"":"^h","-1":"7(rJ8","1.5757376492799887e+308":""}
argument4[403] = null
argument4[0] = {"595":"l","823":"","]":"","^":1.5291086817185e+308,"1.7484510713516794e+308":157}
return a-b*c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = 213
base_3[5] = null
argument6[5] = true
return a+b+c
};
var argument6 = true;
var argument7 = [823,25,82,49,-100,607];
var base_0 = [595,843,1.7976931348623157e+308,595,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,843,1.7976931348623157e+308,595,893]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,843,1.7976931348623157e+308,595,893]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,843,1.7976931348623157e+308,595,893]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test338.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)