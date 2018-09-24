





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = {"655":"","893":705,"-100":4.551003452793983e+306,"1.3691035447286266e+308":607,"1.5142585240022878e+308":1.359136872727139e+308,"2.752475637127002e+307":":S","%;":"18{","-1":""}
base_0[7] = {"3":1.392282022603362e+306,"&-":705,"J":"3","$u":-100,"5.091880966048685e+307":49,"8.52581987686938e+307":0,"":"w","6.48462256079936e+307":6.428245440695281e+307}
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = ""
argument3[5] = false
return a-b+c
};
var argument3 = {"403":"T","595":242,"893":1.3180951791069857e+308,"":"","2.1561845507200056e+307":1.1818306555670082e+308,"o":"","9.500268941140676e+307":"'[L5J;","=":"","5.1671259145187855e+307":"","pS":5e-324};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = ["WG","t",627,82,843]
base_2[2] = 59
return a-b-c
};
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = null
return a+b/c
};
var argument9 = "j";
var base_0 = ["O","y","ppT5","q&","WzX","E"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test313.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)