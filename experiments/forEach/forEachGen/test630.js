





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = [25,969,823]
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.462967293930506e+307] = -1
argument4[49] = "[Y;U["
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][4] = 1.0436655616034215e+308
base_2[8] = null
return a+b*c
};
var argument4 = ["e","|C1X","2","Es","X%"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['a'] = false
argument5['1SHF1'] = false
return a+b-c
};
var argument6 = true;
var base_0 = [49,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test630.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)