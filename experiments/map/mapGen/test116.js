





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = [705,403]
base_0[3][2] = [655,893,"Jx"]
base_0[3][2] = true
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = {"4.669047828917893e+307":1.7976931348623157e+308,"1.6111909221514076e+308":607,"":157,"9.671944385054846e+307":""}
base_1[2] = "9]0&"
base_1[6] = {"49":242,"843":3.50775313451604e+305,"":"K","j":1.6743865941724667e+308,"1.1508981221717804e+307":4.907138319665248e+307,"q9m":595,"(":"K","3.023116731560942e+307":"R@","6.291951990783069e+306":6.84436757783497e+306}
return a-b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ["9H","k,",705,"r+^","q",460]
return a-b-c
};
var argument4 = true;
var argument5 = {"59":1.0045274766620314e+308,"":"","7.232930364299541e+307":"|tD","1.5695376371254521e+308":":(rFHu2;","m7P":2.512778143129416e+307,"2.659538997627285e+307":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = ""
base_3 = null
return a/b-c
};
var base_0 = ["y","n=Ip=",893,82,242,"=",595,"mx"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["y","n=Ip=",893,82,242,"=",595,"mx"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["y","n=Ip=",893,82,242,"=",595,"mx"]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["y","n=Ip=",893,82,242,"=",595,"mx"]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test116.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)