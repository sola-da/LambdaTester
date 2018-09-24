





var callbackArguments = [];
var argument1 = true;
var argument2 = 8.249589502626883e+307;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = "L"
argument2[3] = [403,-100]
return a/b*c*d
};
var argument5 = 1.0045573564334503e+308;
var argument6 = null;
var argument7 = [122];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][9.12287810829114e+307] = "_"
base_1[3] = 1.4016116870700524e+308
return a-b-c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = null
base_2[5] = null
base_2[6] = ""
return a-b-c-d
};
var argument10 = true;
var argument11 = "*%";
var argument12 = r_1;
var argument13 = r_3;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = null
return a/b-c/d
};
var base_0 = [1.7976931348623157e+308,618,242,705,122,823,714,242,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,618,242,705,122,823,714,242,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,618,242,705,122,823,714,242,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,618,242,705,122,823,714,242,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test81.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)