





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1] = false
base_0[2] = ""
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = {"157":"97i","213":969,"783":"","T":"","":"Vg"," ":"","1.515313962948413e+308":"","J":"","S":"?","9.447760343671484e+307":"(U"}
base_1[1][2] = 82
base_1[0] = 59
return a-b+c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][7] = {"3.909348674616928e+307":"","":8.179402279216798e+307,"1.4856450029912693e+308":"[E","DG":4.846879412151112e+306}
base_2[6] = true
base_2[0][6] = true
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = [122,893,242,25,59,25,618,0]
return a+b-c
};
var argument6 = r_2;
var argument7 = r_2;
var base_0 = [595,893,1.7976931348623157e+308,783,714,213,823]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,1.7976931348623157e+308,783,714,213,823]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,1.7976931348623157e+308,783,714,213,823]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893,1.7976931348623157e+308,783,714,213,823]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test358.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)