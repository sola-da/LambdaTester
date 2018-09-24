





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][1] = null
return a/b/c
};
var argument2 = 100;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = "p"
argument4[1.7976931348623157e+308] = {"f'":1.7976931348623157e+308,"1.6023124883464271e+308":-100,"":655}
argument5[705] = {"9":"1","783":"W","7.140633291246696e+307":4.3123238354455394e+307,"1.1338302620488947e+308":"5o","":"","1.4082797562394701e+308":1.0947853609881186e+308,"iv":595,"4.0249813613673833e+306":"B","8|>r":823}
return a-b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][1] = ""
base_2 = false
base_2[0][0] = 9.097324469999389e+307
return a-b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[705] = 618
base_3[3][0] = null
return a-b+c
};
var argument6 = null;
var argument7 = 5.569637581896222e+307;
var base_0 = ["FA",893,1.7976931348623157e+308,"a","pYxli","C",49,"WRp"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test983.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)