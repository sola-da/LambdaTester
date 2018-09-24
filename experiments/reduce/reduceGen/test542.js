





var callbackArguments = [];
var argument1 = null;
var argument2 = 1.4643738812226832e+308;
var argument3 = 8.097535949121467e+307;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][9.12287810829114e+307] = 595
argument1[8] = {"783":"","":969,"7.046168993064557e+306":"","5.762353770381843e+307":-1}
return a+b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = ["jg!","P","L]eD-7","lu","0","J","Mg","bu","@U","("]
argument7[655] = null
return a/b-c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[25] = true
return a-b*c*d
};
var argument7 = 122;
var argument8 = false;
var argument9 = r_2;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[';N'] = {"5":"","242":"x","607":1.5523117894747937e+308,"":"","1.6784625853029251e+308":"",":^":1.7976931348623157e+308,"4.731337868115702e+307":3.566730758114075e+307,"x`z":783}
argument7[1] = false
return a/b*c-d
};
var base_0 = [714,893,705,122,-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,893,705,122,-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,893,705,122,-100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,893,705,122,-100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test542.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)