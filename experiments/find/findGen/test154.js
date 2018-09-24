





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = null
base_0[5] = [100,242]
argument2[-1] = {"126":"iI<","618":843,"1.3665207540167995e+308":1.7918622082104132e+308,"":213,"g":1.7934322767504782e+308,"1.7280963300438886e+308":7.162876586755669e+307,"1.7976931348623157e+308":-1,"1.6706343314769343e+307":"`pt","-100":"6Z"}
return a-b+c
};
var argument2 = 242;
var argument3 = {"9.277784805754391e+307":"v","":100,"1.205367971338158e+307":"^","3.2189715807195713e+307":"","x":"4","1.5718259859830486e+308":"","K":"Vc1","P":1.1091887941940969e+308,";l":1.2862086521303635e+308,"6%>?":8.549263912772233e+306};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {"H":"","'":"An51",",wo":3.4160175559733943e+307}
base_1[1][7] = [213,242,0]
return a*b/c
};
var argument5 = {"893":"","1.9314447616546257e+307":49,"":618,"*k":6.348318171591016e+307,"e":"","1.3301876240404417e+308":460};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = false
argument8['!j'] = ""
argument7[1.0500354979187844e+308] = true
return a/b/c
};
var argument7 = "n[JI";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = 843
argument9[5] = null
base_3[0][6] = {"122":627,"213":213,"tr":"e","":"6","B":"-",";":"Fo","8.934440994133963e+307":""}
return a-b*c
};
var argument9 = null;
var base_0 = [25,157]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,157]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,157]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,157]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test154.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)