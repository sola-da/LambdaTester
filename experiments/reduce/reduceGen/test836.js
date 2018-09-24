





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[655] = null
base_0[5] = ""
return a/b/c/d
};
var argument2 = 8.356916446719446e+307;
var argument3 = true;
var argument4 = 627;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['HMm'] = {"714":1.65478127640429e+308,"k":1.3822266589325607e+307,"D":2.4698967229273394e+307,"":5.047824536319066e+307,"3.2983276660661626e+307":0,"Q8":714,"aD`":"D","XO":"","6.307774430996931e+307":"r"}
argument3[1.1532786076532189e+308] = [122]
return a-b-c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[595] = null
base_2[0] = "r"
argument7[403] = {"213":"","1.0080099265726054e+308":"!AvjB,","2.639607230767327e+307":2.0041822415120995e+307}
return a-b+c-d
};
var argument7 = ["D","D","s","ZspC>oB#","K","$I#","s",",^"];
var argument8 = true;
var argument9 = r_3;
var argument10 = r_3;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = [969,213,460,-1]
argument9[82] = 1.1158578725600606e+308
return a/b/c/d
};
var base_0 = [595,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test836.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)