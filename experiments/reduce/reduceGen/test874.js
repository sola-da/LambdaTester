





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[7.999889602676851e+307] = null
return a*b-c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['18{'] = {"157":"","1.4371411569684882e+308":"_=(Kp","I":-1,"7.881166519145258e+307":1.5954246588194648e+308,"":"","8.537092178914801e+307":893,"2.2882378779958547e+307":""}
argument5[0] = [242,460,893,460,157,213,893,0,607]
return a+b/c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = true
argument5[1.171692140852735e+308] = [627,100,59]
argument4[2.1280896016417002e+307] = {"460":"","2.2286503551710153e+307":";","L":783,"3.9457743054769443e+307":1.760754167873549e+308,"":"","=O8":""}
return a+b*c+d
};
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = null
return a+b-c*d
};
var base_0 = [893,59,783,126,460,705,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,59,783,126,460,705,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,59,783,126,460,705,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,59,783,126,460,705,59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test874.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)