





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = false
base_0[3][1] = 2.032638622771397e+307
base_0[2] = {"":"IZ"}
return a*b+c/d
};
var argument2 = null;
var argument3 = r_0;
var argument4 = r_1;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = null
argument2[0] = "L"
argument3[0] = false
return a-b-c/d
};
var argument6 = true;
var argument7 = false;
var argument8 = ["h","-;",":l","a","9"," d"];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = null
base_2 = [893,126,843,-100,893,242,-1,-100,655]
argument6[3] = {"100":403,"213":0,"":9.049312940323967e+307,"1.2184689402039622e+308":"","1.5974730653328156e+308":"","1.4569957856753321e+308":8.448319892399842e+307,"7.220941261933386e+307":"","5e-324":714}
return a-b/c-d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = ""
base_3[3][1] = {"2.309442729121847e+306":1.690200784032774e+308,"":"I","ekE2":"","4.379749936531839e+307":122}
argument11[0] = null
return a*b/c-d
};
var argument11 = [1.7976931348623157e+308,"L","z",242,618,969,"UX",403,"`"];
var base_0 = [",|","`","{","3","g8",")"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",|","`","{","3","g8",")"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",|","`","{","3","g8",")"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",|","`","{","3","g8",")"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test814.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)