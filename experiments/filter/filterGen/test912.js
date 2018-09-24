





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = "+"
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = {"213":"","242":"i","":"8(C","X":"","HW":"_","1.3060118174044118e+308":""}
return a+b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = false
base_2[8][3] = {"213":1.0050602206045617e+308,"595":3.7615811230065293e+307,"4.759049412229513e+307":403,"1.5791172066888808e+308":"C","BM9":100,"1.5929404443336713e+308":""}
argument5[126] = {"82":4.2729622917997267e+307,"5.94013440955587e+307":"KC","^":"k","":893,"1.000386996795711e+308":"","2.089782927555556e+307":49}
return a+b+c
};
var argument4 = "W";
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.7847438319683965e+308] = "vP"
argument8[3] = null
return a+b/c
};
var base_0 = [714,403,"&",403,"A",213,"P","t"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,403,"&",403,"A",213,"P","t"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test912.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)