





var callbackArguments = [];
var argument1 = true;
var argument2 = ")gif";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['Cb'] = {"6":"","59":82,"":"_f5D3","6.831057701761304e+307":"k","<G 8":",#"," ":1.7976931348623157e+308,"8.028324171333958e+307":"","1.0016487002105424e+308":"&","8.560752382760418e+307":4.4220611954089595e+307}
return a-b*c*d
};
var argument5 = true;
var argument6 = r_1;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['HMm'] = 1.3044375433086488e+308
argument7[59] = 82
return a/b+c+d
};
var argument9 = null;
var argument10 = r_1;
var argument11 = r_1;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = null
argument10[403] = {"59":"S","82":-1,"100":607,"403":"","":25,"2.455354591164276e+307":82,"1.5619044527864647e+307":"l95","1.8593427668299157e+304":4.746280500328828e+307,"1.499771856007242e+308":618}
return a-b-c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[0] = null
argument14[1.1277822633002616e+308] = 1.1896590294436115e+308
return a+b+c/d
};
var argument14 = 1.499835974022376e+308;
var argument15 = false;
var base_0 = ["hk","a","G","!","L","{","CO","a"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["hk","a","G","!","L","{","CO","a"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["hk","a","G","!","L","{","CO","a"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["hk","a","G","!","L","{","CO","a"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test749.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)