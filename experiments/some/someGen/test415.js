





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = 7.353165664316192e+307
argument2[1.5109538778533692e+308] = false
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1]['{X'] = "So<m'nG}5="
argument3[1.5109538778533692e+308] = null
return a*b*c
};
var argument3 = "";
var argument4 = 1.5320597784756265e+308;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = null
base_2[0] = ["I>k","z","Q3","m","K","z"]
return a/b*c
};
var argument6 = {"59":"","82":"","122":1.7926686967343454e+308,"242":5e-324,"607":"M","1.5967091066754254e+308":">U","":1.4017455472119043e+308,"1.1106205995498064e+308":"","8 CN":"oF"};
var argument7 = 618;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[122] = {"126":8.720871329419065e+307,"460":"c","1.2238380862834346e+308":""}
argument9[1] = [100,49,122,627,126]
argument9[6] = {"0":"%","595":"t5REtQ_Ix","5.111202445032394e+307":7.367642329339135e+307,"":1.1544926579210785e+308,"pC`S":6.612489646581531e+307,"1.9260911385430307e+307":"7)","4.8579094138751596e+306":0,"#Gn]F":25}
return a/b+c
};
var argument9 = {"25":157,"126":"A","618":1.5129431215635945e+308,"*":"","8.260831713037601e+306":"","":"","1.071976505123654e+308":783,"1.7976931348623157e+308":100};
var base_0 = [5e-324,893,157,"]y",-100]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,893,157,"]y",-100]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,893,157,"]y",-100]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,893,157,"]y",-100]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test415.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)