





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = true
argument1[893] = null
base_0[6][4] = {"969":1.7487995815449493e+308,"":59,"|":"","*^":823,"7.615698515207543e+307":"A"}
return a+b-c
};
var argument2 = [100];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['='] = false
argument6['^h'] = "Z"
return a+b*c
};
var argument5 = {"783":"Kv","1.5461294980354785e+308":"Z","1.3311647125719022e+308":5e-324,"":1.5486040849173945e+307};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][6] = false
argument8[126] = "BRgm"
argument8[5] = ["bT8@b","Mjw`_p","(u","#"]
return a*b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = ""
argument9[4.953791384496108e+307] = 9.440331263247344e+307
return a+b+c
};
var argument8 = r_2;
var argument9 = {"627":"","893":"","6.858235270410563e+307":"^Z","":618,"^)":0};
var base_0 = [823,122,705,403,242,460,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,122,705,403,242,460,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,122,705,403,242,460,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,122,705,403,242,460,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test503.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)