





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.3599216339661573e+308] = true
argument3[2] = {"705":823,"783":3.801826846325153e+307}
argument2[1.3599216339661573e+308] = false
return a*b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = "h"
return a-b/c
};
var argument4 = 0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = 403
argument5 = {"783":1.6940753698039725e+308,"1.2911527785209065e+308":""}
return a-b*c
};
var argument6 = {"4":"C","242":1.3754938564369921e+308,"403":"{","U":"W=","J":"l@","":"","1.1322840046069075e+308":783};
var argument7 = "";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][6] = [213,-100,59,655,126,893,595]
argument9[1.3599216339661573e+308] = {"j":82,"1.1673360128075213e+308":"","1.3655648718876226e+308":"","":"u","^1Qq+":627,"a":"8q?"}
return a/b+c
};
var base_0 = [618,122,0,157,1.7976931348623157e+308,1.7976931348623157e+308,655,1.7976931348623157e+308,242,242]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,122,0,157,1.7976931348623157e+308,1.7976931348623157e+308,655,1.7976931348623157e+308,242,242]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,122,0,157,1.7976931348623157e+308,1.7976931348623157e+308,655,1.7976931348623157e+308,242,242]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,122,0,157,1.7976931348623157e+308,1.7976931348623157e+308,655,1.7976931348623157e+308,242,242]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test449.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)