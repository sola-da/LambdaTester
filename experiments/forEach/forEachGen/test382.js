





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][4] = "o="
argument1 = {"242":1.1440889728865172e+308,"460":"[w","9.507338618902309e+307":"","":823,"1.218382997714731e+308":"<"}
argument2[1] = [",",126,"u","T",714,122,"f"]
return a-b/c
};
var argument2 = null;
var argument3 = ["#","1B(gl"," 97","y","vl","%","|","4"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = 122
base_1[3] = 82
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][823] = 82
base_2[8] = null
return a*b-c
};
var argument6 = 705;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = ""
argument8[157] = null
argument8[7] = {"0":100}
return a*b-c
};
var argument8 = {"59":893,"":893,"1.5809050350402413e+308":242,"g":25,"dB":"E","5I":0,"1.2913525229684295e+308":"","8.746692004339982e+307":0,"b":627};
var argument9 = null;
var base_0 = [100,82,714,460,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,82,714,460,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,82,714,460,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,82,714,460,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test382.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)