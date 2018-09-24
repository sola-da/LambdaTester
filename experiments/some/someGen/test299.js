





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = ["E",">4","&","$","F","dt","_"]
base_0[2][5] = false
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"82":"","|":893,"-1":4.0665366914531736e+307,"1.6089767793743998e+308":"","":"","9.899525857756484e+307":59}
argument3['_W'] = [893,":",969]
argument4[122] = null
return a-b-c
};
var argument3 = [-100,59,100,823,122,607,607];
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4.224481734419934e+307] = 9.680646463597726e+307
argument7['T'] = ["w","f"]
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = {"":1.0905037475728406e+308,"cL":"8"}
argument7[1] = null
base_3['length'] = 1.7955207610112512e+308
return a/b-c
};
var argument7 = false;
var argument8 = true;
var base_0 = [823,714,1.7976931348623157e+308,783]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,714,1.7976931348623157e+308,783]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,714,1.7976931348623157e+308,783]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,714,1.7976931348623157e+308,783]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test299.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)