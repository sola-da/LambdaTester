





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1.7261030733891165e+308] = ["?","I",59,"$p",1.7976931348623157e+308,"?:a_&H",-1,"t",460]
base_0[6] = [59]
return a*b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = "a)XN7"
return a+b-c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][3] = 607
base_2[6] = ["%M<","FC","nWkp","!m","6b","P","as","G(n(k","t"]
return a-b-c
};
var argument6 = r_2;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = true
base_3[0][3] = 705
argument10['^h'] = {",":714,"k":6.393731312185042e+307,"X":9.947941492279874e+307}
return a*b/c
};
var base_0 = [49,126,-1,25,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,126,-1,25,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,126,-1,25,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,126,-1,25,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/find/findGen/test840.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)