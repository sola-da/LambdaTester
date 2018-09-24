





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = [242,0,403]
base_0[4] = "q"
return a*b*c
};
var argument2 = ["o","v","j","|<0C","%Z"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][7] = {"25":3.3551408635295405e+307,"705":"","":1.2666471715619773e+308,"1.7976931348623157e+308":714,"a(":1.4579300375042498e+308,"+":"ch","u":"","1.2656943076241766e+308":25,"1.1828248397907377e+308":627}
return a/b*c
};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[100] = 100
argument6[-1] = "_i"
return a/b+c
};
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.377960715099946e+307] = 893
argument9[4] = {"893":5.746123306031664e+307,"4.559098917729872e+307":"_","1.7976931348623157e+308":")R","=m?m')":655,"8.394308331307927e+307":1.423333310337063e+308,"":1.6251696448702168e+308,";":3.4369012875266316e+306}
argument10[6] = {"49":25,"82":1.6953882629939128e+308,"H":122,"4.2153359852223526e+306":"}","":1.5473844294135143e+307,"1.7261810005533945e+308":49}
return a+b+c
};
var base_0 = [213,655,893,82,627,59,59]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,655,893,82,627,59,59]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,655,893,82,627,59,59]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,655,893,82,627,59,59]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test351.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)