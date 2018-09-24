





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = null
argument2[6] = 7.581060014946795e+307
argument2[4] = {"122":"+","126":1.0446870721149087e+308,"618":"2","i6r":"","":"(","1.0329826830282267e+306":-1,"6.275192148174133e+307":607,"2.1560351156642423e+307":""}
return a-b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = ""
argument5[2] = null
argument4[0] = {"213":714,"":-100,"1.5196540797749313e+308":"eR","6.763463921188818e+307":-100,"1.3693583679480502e+308":"Zcc>PH[yD","${H,N":5.878866558346786e+306}
return a/b*c
};
var argument4 = [242,242,783,627,82,126,-100,595,655,893];
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = null
return a-b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = "G"
argument8[3] = null
return a*b-c
};
var argument8 = r_1;
var base_0 = [607,5e-324,0,59,655,0,49]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,5e-324,0,59,655,0,49]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,5e-324,0,59,655,0,49]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,5e-324,0,59,655,0,49]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test216.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)