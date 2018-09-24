





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = ""
return a+b/c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = 6.135005659388284e+307
return a+b/c/d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[627] = {"2.485519073956419e+307":"4I"}
return a+b+c+d
};
var argument4 = {"1.74224326329751e+307":1.1507608899554814e+308,":t":"i","1.1989897650610793e+308":3.0079556690173546e+307,"-":8.861637867798687e+307,"6.301483310138156e+307":100};
var argument5 = null;
var argument6 = [783,627,25];
var argument7 = "XcX]o_";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[627] = [-1,969,-1,25,655,655]
argument5 = ""
argument7[0] = {"627":823,"714":"","x^z|1":"",">E":213,"":"","1.0060649000977694e+308":1.6344911954855456e+308,"1.1411392936088485e+308":"W"}
return a-b/c-d
};
var base_0 = [627,893,893,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,893,893,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,893,893,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,893,893,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test151.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)