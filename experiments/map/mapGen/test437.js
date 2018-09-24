





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['3Tpj5'] = false
argument3['T'] = false
argument2[9.869573703797622e+307] = {"1.3234913595773312e+308":2.6371587586428085e+307,"9.004497797912343e+307":"","":655,"6.128154274595187e+307":3.0001951740159085e+307,"1.7976931348623157e+308":1.184316037476196e+308}
return a/b*c
};
var argument2 = "T@";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = {"122":"","242":25,"":"tq","1.6171120991969966e+308":9.844996932392917e+307}
argument5[3] = null
return a/b*c
};
var argument5 = [627,82,25,242,126,-100];
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[403] = {"126":"[y","":"","7.783435199648558e+307":"","5.835010608051955e+307":"M"}
return a+b/c
};
var argument8 = r_0;
var argument9 = r_0;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[6] = ""
return a*b*c
};
var argument11 = 5.625620300469668e+307;
var base_0 = [823,705,-1,460,460,25]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,705,-1,460,460,25]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,705,-1,460,460,25]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapGen/test437.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)