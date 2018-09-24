





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = [595,"c",893]
argument2[3.8120440085202614e+307] = true
argument2['K'] = 460
return a-b-c/d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = [460,25]
return a+b/c-d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = 460
return a*b/c*d
};
var argument5 = r_0;
var argument6 = "";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = [49,122,25]
argument9[1] = null
return a+b-c+d
};
var argument8 = {"2":25,"59":"","403":1.1663398009080941e+308,"823":-100,"":"AR","|":")","Z$j1":"","7.893900955498604e+307":59};
var base_0 = [783,"f",1.7976931348623157e+308,-100,460,"B","[NN",")u"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"f",1.7976931348623157e+308,-100,460,"B","[NN",")u"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"f",1.7976931348623157e+308,-100,460,"B","[NN",")u"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,"f",1.7976931348623157e+308,-100,460,"B","[NN",")u"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test599.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)