





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = [655,595,403,1.7976931348623157e+308,0]
base_0[1][1] = 0
base_0[8] = {"655":2.255380048286021e+307,"":"=","9.039608676339056e+306":"e"}
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.1679954109349114e+308] = [82,1.7976931348623157e+308,49,82,122,714,82,1.7976931348623157e+308]
base_1[0] = 1.485563242381638e+308
return a+b/c
};
var argument3 = false;
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['C'] = "k-"
argument7[1] = ["06DOy","{0","m","6","v]*5)P","n8"]
base_2 = null
return a+b/c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = {"122":"","460":5.263579564570391e+307,"893":1.4542857980145518e+307,"tV":403,"s":595,"":1.6317040915995005e+308}
base_3[8][3] = "*"
argument8[1.1679954109349114e+308] = true
return a-b-c
};
var argument8 = 5.764280201457368e+307;
var argument9 = null;
var base_0 = [783,618,49,1.7976931348623157e+308,823]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,618,49,1.7976931348623157e+308,823]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test404.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)