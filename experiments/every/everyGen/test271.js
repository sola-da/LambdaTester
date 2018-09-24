





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = {"460":969,"655":1.0574283919266698e+308,";":"","":"","c":157}
base_0[1][4] = ""
base_0[0][1] = null
return a+b/c
};
var argument2 = 6.282601380523191e+307;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = [-100,595,714,0,627,126,122,705]
base_1[1][2] = null
return a-b/c
};
var argument4 = null;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = 783
base_2[7] = null
base_2[9] = 1.3140116748173003e+308
return a/b-c
};
var argument7 = "";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = ""
argument10[122] = {"403":714,"P7":843,"":7.636189325906292e+307,"1.2505219157605255e+308":627,"2.5752525941970034e+307":"","1.7629056187810389e+307":"1W>","1.6457151015823817e+308":"","1.4643980791775014e+308":655,"7.992786139696397e+307":5e-324}
argument9[3] = 1.3187429549380001e+308
return a*b-c
};
var argument9 = 1.4471711945511564e+308;
var base_0 = [100]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test271.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)