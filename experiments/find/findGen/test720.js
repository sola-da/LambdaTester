





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['W'] = ""
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][7] = {"969":1.209572944380806e+308,"":627,"1.6197351119859567e+308":655,"k":126,"Y":"y","1.3925965250534969e+308":6.527882526183834e+307}
argument3[6] = true
return a-b-c
};
var argument3 = r_0;
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = ""
argument6[5] = [595,1.7976931348623157e+308,893,100,607,126,0,627,969]
return a-b-c
};
var argument6 = 3.370588765078018e+307;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = {"213":0,"1.7721301631268975e+308":"","k":3.937652346128315e+307,"mP":126,"":"k[=NQ","1.6215612281371204e+308":"D'%&1v+"}
base_3[9] = {"1.1912079009670547e+308":"","$":"","1.7142888768581692e+308":1.6756221184550962e+308,"Q":1.1745741277257398e+308,"":1.5234854174464783e+308}
argument10[783] = 1.7638449781913584e+308
return a/b/c
};
var argument9 = false;
var argument10 = [25,82,607];
var base_0 = ["z","J",242,">^4fse"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z","J",242,">^4fse"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z","J",242,">^4fse"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z","J",242,">^4fse"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test720.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)