





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1869172855352885e+307] = [157,"!","o","W",59,705,0,"Y18"]
argument3[5] = "Z"
argument3[6.35085648319999e+307] = {"rP":1.1448604512672192e+308,"":100,"6.722193650236205e+307":1.265649983139807e+307}
return a+b+c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7.463432409233234e+307] = 1.4044860404574058e+308
argument3[7.463432409233234e+307] = 6.674328181612027e+307
return a+b/c*d
};
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = [1.7976931348623157e+308,783]
argument6 = 1.2139078416565207e+308
return a+b-c-d
};
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = {"n":9.684471686909038e+307,"1.5373806976398635e+308":627}
argument6[9] = null
argument7[0] = 126
return a-b/c*d
};
var argument7 = r_0;
var argument8 = 1.3240082026559278e+308;
var base_0 = ["b","t4","v","@"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["b","t4","v","@"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["b","t4","v","@"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["b","t4","v","@"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test217.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)