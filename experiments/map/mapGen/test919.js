





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['3Tpj5'] = "+"
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"213":"","242":"i","":"8(C","X":"","HW":"_","1.3060118174044118e+308":""}
return a+b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = false
argument4[969] = {"213":1.0050602206045617e+308,"595":3.7615811230065293e+307,"4.759049412229513e+307":403,"1.5791172066888808e+308":"C","BM9":100,"1.5929404443336713e+308":""}
argument4[607] = {"82":4.2729622917997267e+307,"5.94013440955587e+307":"KC","^":"k","":893,"1.000386996795711e+308":"","2.089782927555556e+307":49}
return a+b+c
};
var argument4 = "W";
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2]['f'] = "vP"
argument7['d'] = null
return a+b/c
};
var base_0 = [714,403,"&",403,"A",213,"P","t"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,403,"&",403,"A",213,"P","t"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,403,"&",403,"A",213,"P","t"]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,403,"&",403,"A",213,"P","t"]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test919.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)