





var callbackArguments = [];
var argument1 = "";
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = {"0":"","242":9.87584936400125e+307,"1.0468452165177355e+308":1.7974931183737252e+308,"G&":1.53103827702017e+308,"1.4800555024022805e+308":1.2225729806921863e+307,"1.593152294247785e+308":"","":"e","m":"","rI":""}
argument2[7.463432409233234e+307] = true
return a*b+c/d
};
var argument5 = null;
var argument6 = "";
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = 627
argument6[7.463432409233234e+307] = true
base_1[8] = null
return a-b/c*d
};
var argument9 = null;
var argument10 = r_2;
var argument11 = r_2;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = null
return a/b*c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[2] = null
return a+b*c*d
};
var base_0 = ["D?R","o","W","A{V","w{c","RWU"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["D?R","o","W","A{V","w{c","RWU"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["D?R","o","W","A{V","w{c","RWU"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["D?R","o","W","A{V","w{c","RWU"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test63.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)