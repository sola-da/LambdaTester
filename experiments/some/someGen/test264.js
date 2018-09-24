





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9] = false
return a*b-c
};
var argument2 = 9.385447196623133e+307;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][5] = [25,627,783,403,705,242,607,126,893,403]
base_1[4][7] = [0,460,126,126,618,403,627,1.7976931348623157e+308,82]
return a+b+c
};
var argument4 = [823,843,122];
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = false
return a+b*c
};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = false
base_3['length'] = [714,403,122,242,5e-324,126,969,25]
return a-b-c
};
var argument9 = r_0;
var argument10 = {"1.2464623589684027e+308":6.26909138615582e+306,"1.4055758350784088e+307":"Mn","TL":"aN6=","":5.645365563370983e+307,"1.7976931348623157e+308":59,"8.963527553574085e+307":"'","+f;":""};
var base_0 = [893,655,213,25,843,122]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,655,213,25,843,122]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,655,213,25,843,122]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,655,213,25,843,122]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test264.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)