





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"6":"MxYXiP","100":"wM","618":"","893":1.7905031626702353e+308,"":3.48204148050827e+307,"3.3934881235753487e+307":""}
base_0[4] = true
base_0 = ""
return a+b*c
};
var argument2 = {"100":1.6259982229346454e+308,"9.69711123808071e+307":1.4510572645636968e+308,"1.506284327428246e+307":1.1644883427141251e+308,"":1.7976931348623157e+308};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = [843,126,655,-1,5e-324,607,460,714,242]
return a-b+c
};
var argument4 = false;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = true
return a-b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = "?"
argument7 = false
argument8[5] = 49
return a*b-c
};
var base_0 = [126,843,213,969,213,1.7976931348623157e+308,823,843,25]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,843,213,969,213,1.7976931348623157e+308,823,843,25]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,843,213,969,213,1.7976931348623157e+308,823,843,25]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,843,213,969,213,1.7976931348623157e+308,823,843,25]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test533.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)