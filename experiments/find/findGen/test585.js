





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = {"0":969,"9":"","460":"","607":893,"893":"","1.4987961136980861e+308":7.579623897474164e+307,"5e-324":"k","l":"#^P^","":"lJ","3.8931841117686357e+307":""}
return a+b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8] = {"126":49,"783":"kmy","843":1.6637145368523418e+308,"2.6044512001023865e+307":"","-100":714,"5.380612713619898e+307":8.489439194107864e+307,"nt":1.3886312469365795e+307,"T":403}
argument3[893] = 1.7976931348623157e+308
argument5[403] = [843,0,100,25,242,100,59,122,714]
return a-b-c
};
var argument4 = [82,714,893];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = false
return a/b*c
};
var argument6 = r_2;
var argument7 = {"2.5380480708483796e+307":627,"8.325287938700077e+306":"7(","9.20902569149446e+307":"m_","b":1.439968191626086e+308,"":",","5.850928752912255e+307":"","V4":"","I":"","l":""};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = {"655":"k5CtX"}
argument9[3.7668525981726295e+307] = false
return a/b-c
};
var argument9 = 1.1583194149320622e+308;
var base_0 = [607,655,893,460]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,655,893,460]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,655,893,460]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,655,893,460]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test585.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)