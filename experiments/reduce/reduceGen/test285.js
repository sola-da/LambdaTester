





var callbackArguments = [];
var argument1 = true;
var argument2 = "Z&^3";
var argument3 = ["x","@i","^,"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = ""
base_0[1][0] = null
base_0[8] = {"5":"QL","25":"r","126":655,"242":5.693510265776069e+307,"714":1.3059172539879942e+308,"8.231679496552983e+307":"+m","":">u","5.430143532888192e+307":1.092362053572321e+308,"1.8217412447577325e+307":-1}
return a-b-c+d
};
var argument5 = r_0;
var argument6 = null;
var argument7 = [655,893,893,403,100,-100,1.7976931348623157e+308,49,843,213];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][0] = null
return a-b/c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = false
base_2[3] = {"100":403,"242":"1","403":"","460":"","":"W","1.3415338562794714e+308":1.6505807343035816e+308,"1.5345892516090565e+308":""}
return a+b/c/d
};
var argument10 = null;
var argument11 = 9.091372325386838e+307;
var argument12 = r_0;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[59] = true
argument12[6.35085648319999e+307] = ""
return a+b-c-d
};
var base_0 = [59,893,607,843,843,1.7976931348623157e+308,157,100,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,893,607,843,843,1.7976931348623157e+308,157,100,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,893,607,843,843,1.7976931348623157e+308,157,100,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,893,607,843,843,1.7976931348623157e+308,157,100,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test285.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)