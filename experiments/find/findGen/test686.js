





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][1] = [213,100,126,-100,82,655,0]
base_0[1][6] = true
return a*b/c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['V'] = [157,"<^","z","B0CcY",1.7976931348623157e+308,"J",893]
return a+b*c
};
var argument5 = null;
var argument6 = 49;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[969] = null
return a*b+c
};
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = 8.917739274118313e+307
argument10[3][6] = [100,5e-324,655,595,100,82,242,1.7976931348623157e+308]
return a-b-c
};
var argument10 = ["%","[^^Q0"," aU","vi","ht","-","XS","o>V2{HNJ"," W"];
var argument11 = 3.32248451678326e+307;
var base_0 = ["-","bJD",">|6uy",705,157,"?","q)>"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-","bJD",">|6uy",705,157,"?","q)>"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-","bJD",">|6uy",705,157,"?","q)>"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-","bJD",">|6uy",705,157,"?","q)>"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test686.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)