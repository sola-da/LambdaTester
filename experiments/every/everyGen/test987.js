





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = 607
base_0[4][1.5144566325729397e+308] = {"59":893,"823":"8","":"","5.647192279181022e+306":"","1.5810093513655304e+308":"dJ","-100":823,"1.4374258719809008e+308":"","^":"[lH","2.3413597804542995e+307":"9l"}
return a/b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[122] = "6"
argument5[0] = false
argument3[2] = true
return a+b*c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = {"403":"p","823":2.0796874953747124e+307,"1.2402781459971547e+308":"","6.928462320200123e+306":"[","":"","1.4820259035990584e+308":7.526378834255857e+307,"I":"%","5e-324":"B"}
return a+b+c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = false
argument8[6.148642213884202e+307] = [242,242,"N",705,"tfD"]
return a/b-c
};
var argument8 = r_2;
var argument9 = null;
var base_0 = [655,627,893,460,627,242,607]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,627,893,460,627,242,607]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,627,893,460,627,242,607]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,627,893,460,627,242,607]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test987.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)