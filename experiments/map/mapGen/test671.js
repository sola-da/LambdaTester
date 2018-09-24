





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = "a"
argument3[403] = {"2":1.1243562499838322e+308,"100":242,"122":">U","595":"w","607":"","1.1833246105497141e+307":1.3777966799054066e+308,"":8.501427076177693e+307,"1.0865393937019784e+308":6.809372615159445e+307,"2.4743578143388917e+307":1.6296856827698392e+308}
return a/b/c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][3] = false
argument5[1.6177106033227046e+308] = [",","Z","$tx","a","]","C","S,","^","^"]
return a*b/c
};
var argument5 = true;
var argument6 = {"7.661118232243194e+307":969};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[82] = null
base_2[5] = ""
base_2['length'] = ["A","=_","[i[","6f0LAqIfQz","+","Z","d#","J","E:K#8"]
return a*b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = false
base_3[3][3] = true
return a/b/c
};
var argument9 = null;
var argument10 = false;
var base_0 = ["XzS","j",1.7976931348623157e+308,"C-","w",595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["XzS","j",1.7976931348623157e+308,"C-","w",595]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["XzS","j",1.7976931348623157e+308,"C-","w",595]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["XzS","j",1.7976931348623157e+308,"C-","w",595]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test671.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)