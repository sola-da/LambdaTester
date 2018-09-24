





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"403":8.429871286056824e+307,"6.511262859542731e+307":1.7976931348623157e+308,"1.283704539492474e+308":8.514729756570929e+307}
return a/b*c
};
var argument2 = {"3":1.1465490919089324e+308,"783":3.0579297391417944e+307,"1.0852078845371491e+308":"","":82,"9.978035284290205e+307":3.882909720579613e+306,"2.320353221901601e+307":-1,"6.57310064065413e+307":5.454978898386515e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = ""
argument4[126] = [-100,100,705,242,-100,627,126,157]
argument4[5] = {"618":8.945013729830286e+307,"1.3571928124337112e+308":"p","":126}
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][1] = "%"
return a/b*c
};
var argument5 = {"Y":1.0682030165965163e+308,"1.1073410092684749e+308":1.2871558233328808e+308,"1.6975638337464941e+308":"","wIs":783,"":1.2908849489421809e+308,"(q]:":"","-Dv^":"","1.2390797318031166e+308":"A","_":""};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][823] = false
return a/b+c
};
var argument8 = 122;
var argument9 = "%";
var base_0 = ["s","*L",242,783,1.7976931348623157e+308,"$]"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["s","*L",242,783,1.7976931348623157e+308,"$]"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["s","*L",242,783,1.7976931348623157e+308,"$]"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["s","*L",242,783,1.7976931348623157e+308,"$]"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test192.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)