





var callbackArguments = [];
var argument1 = true;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"E0L":893,"7M0&&Ll":"","1.0029820620019752e+308":1.1747174708047707e+308}
argument1['Cb'] = {"2.454278998694458e+307":618,"7.913273846123657e+307":"Q"}
return a-b*c*d
};
var argument5 = "|";
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[25] = null
argument5['Cb'] = 8.274696976512959e+307
base_1[0][0] = true
return a/b*c+d
};
var argument9 = [823,714,1.7976931348623157e+308,783];
var argument10 = r_2;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[25] = ["U",">4"]
argument11[6.35085648319999e+307] = 9.166046120790466e+307
return a/b*c*d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = {"82":"","":"","6.602374912851725e+307":1.3596558937946122e+308,"=":1.048535785905063e+308,"|":893,"-1":4.0665366914531736e+307,"1.6089767793743998e+308":"","9.899525857756484e+307":59}
argument14[0] = [893,":",969]
argument15[59] = null
return a/b/c+d
};
var argument14 = [-100,59,100,823,122,607,607];
var base_0 = [627,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test257.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)