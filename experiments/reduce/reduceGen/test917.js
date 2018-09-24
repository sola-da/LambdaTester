





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = {"82":1.2530613096753048e+308,"":"","N":126,"#":"","4.0553041961899596e+307":""}
return a-b/c/d
};
var argument2 = true;
var argument3 = 5.802403443472942e+306;
var argument4 = r_1;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = "B>"
argument2['Cb'] = {"0":"","242":595,"595":1.0925492203209273e+308,"618":460,"714":"","P3&":59,"":0,"<g":157,"#kH":"e"}
return a-b*c/d
};
var argument6 = true;
var argument7 = "[";
var argument8 = 607;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['Cb'] = 4.554368339052138e+306
argument7[5.71178064163152e+307] = ["Cr","Ra","o"]
return a-b-c+d
};
var argument10 = r_2;
var argument11 = r_1;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = null
argument11[5] = [607,"ey]t","d",618,"aEW2"]
argument10[7.999889602676851e+307] = null
return a+b*c-d
};
var base_0 = [893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test917.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)