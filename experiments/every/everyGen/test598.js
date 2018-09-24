





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[122] = {"100":1.322534163797284e+308,"595":"","627":2.296667067071535e+307,"1.0949474610337643e+308":893,"9.33224078409996e+307":1.03889827909893e+308,"I":"","":460,">":"","<)":"","3.2507246094443173e+307":"Nnw"}
argument3[2] = true
return a+b+c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][6] = true
base_1[1][2] = "h"
argument5[6] = ["Z","<","%jqALh+[1O","{","*^h","tdV"]
return a*b*c
};
var argument4 = 8.967244814997448e+307;
var argument5 = {"25":"","783":49,"893":"l","":59,"7.798816862371874e+307":"","G":"8","1.299071034595256e+308":"jp","1.6483456832362913e+308":714,"'k":607,"#^P^":460};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8] = [607]
argument7[1.9097830510613482e+307] = 3.200311259606451e+307
base_2[1][2] = [25,100,157,460,5e-324,122]
return a-b*c
};
var argument7 = 1.3807417155908894e+308;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[893] = {"1.491024870528083e+308":0,"3.580240368355559e+307":"","":783}
base_3[2] = ""
return a*b*c
};
var base_0 = [595,"6n","3",59,705]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"6n","3",59,705]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"6n","3",59,705]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"6n","3",59,705]
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
require("fs").writeFileSync("./experiments/every/everyGen/test598.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)