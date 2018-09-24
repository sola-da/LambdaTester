





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = true
return a*b/c
};
var argument2 = 242;
var argument3 = {"49":"p2","705":";","823":"","969":"4","4.0460789405704716e+307":"","O":-100,"w":"UY","p^HY#H":"'>","KU":2.947014935337902e+307};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['f'] = null
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7][2] = {"122":"","655":"","":1.081008036369558e+308,"1.0360367152870218e+308":157,"+":"7","WU":1.6261163229952454e+308,"mx":"R@Q|","Og":""}
return a*b*c
};
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[607] = null
argument8[1]['d'] = "s"
return a/b/c
};
var argument8 = r_0;
var argument9 = null;
var base_0 = [122,100,705,607,705,59,783,82,655,618]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,100,705,607,705,59,783,82,655,618]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,100,705,607,705,59,783,82,655,618]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test407.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)