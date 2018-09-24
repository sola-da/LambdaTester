





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = [823,"4",126]
return a*b/c
};
var argument2 = {"157":8.073730668695544e+307,"c":9.025763467511772e+307,"1.7486982539076328e+308":"cV","1.2890291316506592e+308":1.7976931348623157e+308};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[-100] = {"714":213,"b":"","1.4226877508919854e+308":-100,"K[":823,"5e-324":"","S":3.4359569259349025e+307}
argument4['T'] = [59,655,0]
base_1[1]['!cck7Mm'] = null
return a-b*c
};
var argument4 = true;
var argument5 = [100,-1,823,893,843,122,627];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7121211182125595e+308] = {"82":"H5","":"0H"}
argument7[157] = ["@`",")"]
argument8[3.7154103611117224e+307] = 1.2835036928129428e+308
return a/b/c
};
var argument7 = ["Mn","y","Q","I)i","|"];
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][1] = true
return a*b/c
};
var base_0 = [893,59,122,"-"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,59,122,"-"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,59,122,"-"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test884.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)