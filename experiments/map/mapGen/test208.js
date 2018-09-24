





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1] = false
base_0[3][1] = [893,460,0,-1,403,655,460,-100,1.7976931348623157e+308]
argument2 = null
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = ["U#",":n","L","ia","wZB*|%E","j8",">k"]
return a*b*c
};
var argument3 = {"403":627,"3.0496588229779424e+307":"<P","2.1786841038846513e+307":6.609714076485972e+306,"(":"","2.304372420167424e+307":"i"};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = "[t"
return a+b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][2] = ""
base_3[0][1.4677087964888306e+308] = {"25":49,"157":"","618":6.185929615655862e+307,"627":4.2019278686769195e+307,"":1.3543816977635064e+308,"7.129996626062589e+306":969,"1.7114825001841658e+308":403,"1.3589102312167006e+308":-1}
argument8[157] = null
return a-b-c
};
var argument7 = null;
var base_0 = [893,595,59,1.7976931348623157e+308,126,595,-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,595,59,1.7976931348623157e+308,126,595,-100]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,595,59,1.7976931348623157e+308,126,595,-100]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test208.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)