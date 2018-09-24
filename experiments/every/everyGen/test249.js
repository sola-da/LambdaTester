





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {"126":1.7976931348623157e+308,"1.7976931348623157e+308":1.0232773996838345e+308,"1.5105685600660775e+308":"QH,Ol","5e-324":""}
argument2[4] = {"460":8.880969439139402e+306,"655":1.76033377748826e+308,"1.3757273966533937e+308":"8$j","":""}
base_0[1] = 1.287033342137431e+308
return a-b/c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = {"460":"","1.5718622338506945e+308":"Ckm","":8.214465922481534e+307,"3.9266654410060057e+306":"-","G":"","o":843,"YN*":705}
return a/b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = [100,893,595]
return a+b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = null
base_3[4] = "l#"
return a*b+c
};
var argument6 = null;
var base_0 = [49,"*","d_#v","[","l",783]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"*","d_#v","[","l",783]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,"*","d_#v","[","l",783]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,"*","d_#v","[","l",783]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test249.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)