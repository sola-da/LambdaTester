





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = ""
argument2[-1] = ""
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = [655,843,893]
argument3[3] = {"8.776007154596675e+307":1.1682973767516745e+308,"1.9811457273560214e+307":""}
return a-b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = null
return a/b/c
};
var argument4 = null;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][0] = {"1.5171480389601577e+308":627,"J":157}
base_3[1] = 823
argument7[3.0481490052276395e+306] = true
return a*b*c
};
var argument7 = null;
var argument8 = r_1;
var base_0 = ["a","&","`","6"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a","&","`","6"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a","&","`","6"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["a","&","`","6"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test155.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)