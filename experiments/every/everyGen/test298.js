





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = [618,82,"u",49,"zp#=",714,"03","_u_M52<]g"]
return a*b*c
};
var argument2 = {"618":"","":"J","C":1.7976931348623157e+308,"5.4305696746362224e+306":969,"H'":4.848970790483911e+307,"1.7976931348623157e+308":"7","3.5044502842279924e+307":"7JIn#4z"};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = true
base_1[0][2] = [25,-100]
return a*b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = ""
argument7[3] = null
return a/b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = [595,5e-324,126]
base_3[1][2] = "lz;b"
base_3[4] = ""
return a/b*c
};
var argument8 = {"0":"4","242":6.140910689895567e+307,"607":"o","618":157,"705":"","":"","Iq$E":"","9i,G`xV":"`","R":"m"};
var argument9 = true;
var base_0 = [100,25,-100,213,122]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,25,-100,213,122]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,25,-100,213,122]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,25,-100,213,122]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test298.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)