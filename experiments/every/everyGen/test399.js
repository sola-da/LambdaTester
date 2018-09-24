





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = "=-mQ"
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = 1.5611174286218809e+308
argument3[403] = {"783":618,"":893}
argument4[2] = {"25":2.9639895079293507e+307,"0I":4.4371141311960307e+307,"^":"I","":"nTv"}
return a*b+c
};
var argument3 = true;
var argument4 = {"627":25,"1.7891294537646748e+308":1.6546852090712252e+308,"jN:|":126,"%":8.090524438419012e+307,"r":1.7976931348623157e+308,"1.326311373876269e+307":"","1.2843833890336391e+307":""};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = null
base_2[0][6] = false
argument7[2.4183178393969103e+306] = ["f",100,100,"^"]
return a+b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a+b*c
};
var argument7 = null;
var base_0 = [25,82,1.7976931348623157e+308,126,705,25,714,49]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,82,1.7976931348623157e+308,126,705,25,714,49]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,82,1.7976931348623157e+308,126,705,25,714,49]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,82,1.7976931348623157e+308,126,705,25,714,49]
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
require("fs").writeFileSync("./experiments/every/everyGen/test399.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)