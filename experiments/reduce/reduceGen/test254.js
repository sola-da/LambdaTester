





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[8] = true
base_0 = [618,82,"u",49,"zp#=",714,"03","_u_M52<]g"]
argument2[25] = {"618":"","":"J","C":1.7976931348623157e+308,"5.4305696746362224e+306":969,"H'":4.848970790483911e+307,"1.7976931348623157e+308":"7","3.5044502842279924e+307":"7JIn#4z"}
return a/b/c/d
};
var argument2 = null;
var argument3 = r_0;
var argument4 = true;
var argument5 = true;
var argument6 = [25,-100];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = ["?","V",49,"gb!K3",705]
base_1[5] = "b"
return a-b/c+d
};
var argument8 = [157];
var argument9 = r_0;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = {"0":"4","8":"s","242":6.140910689895567e+307,"":6.760515685248437e+307,"Iq$E":"","9i,G`xV":"`","R":"m","w":"hs[","1.0689775630670688e+308":"!"}
argument8[8] = 4.944110727778024e+307
return a+b/c+d
};
var argument12 = r_0;
var argument13 = r_0;
var argument14 = null;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[2.1869172855352885e+307] = [157,-1,157,969,-100,893,969,242,122]
argument13[2] = 6.005696460858268e+307
return a/b*c+d
};
var base_0 = [823,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test254.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)