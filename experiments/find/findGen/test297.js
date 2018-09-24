





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = [823,823,-1]
return a*b-c
};
var argument2 = 1.0651786672722733e+307;
var argument3 = {"783":"","7.698439527364242e+307":242,"1.812426207428517e+306":893,"8.77683398982083e+307":"Z$","O":"","2.5490277740455753e+306":969,"":"Sq&"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[627] = true
base_1[2] = false
return a/b-c
};
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = ["`",705,"O:S",126,126]
argument9[6] = true
base_2 = 122
return a+b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = 655
base_3[4] = {"3":1.392282022603362e+306,"&-":705,"J":"3","$u":-100,"5.091880966048685e+307":49,"8.52581987686938e+307":0,"":"w","6.48462256079936e+307":6.428245440695281e+307}
argument9['j'] = false
return a+b*c
};
var argument9 = {"P9":1.5344866973178681e+308};
var argument10 = {"403":"T","595":242,"893":1.3180951791069857e+308,"":"","2.1561845507200056e+307":1.1818306555670082e+308,"o":"","9.500268941140676e+307":"'[L5J;","=":"","5.1671259145187855e+307":"","pS":5e-324};
var base_0 = [0,"==,>;"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,"==,>;"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,"==,>;"]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,"==,>;"]
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
require("fs").writeFileSync("./experiments/find/findGen/test297.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)