





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = {"3.740363429359182e+307":1.41386216667012e+308}
base_0[4] = [655,"K-","sHKoVj",100]
base_0[8] = "}"
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = null
return a-b-c
};
var argument3 = false;
var argument4 = {"8":"","157":"","zw7":618,"":627,"3.1604300089476386e+305":"","Z":"&A0","6.944627473330144e+307":""};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.6798476101238045e+308] = {"1.8104265456341696e+307":"'","t^":""}
base_2[4] = 1.361363858031056e+308
return a*b/c
};
var argument6 = null;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = {"0":"",")":"","=":9.757258245623753e+307}
argument10 = false
base_3[9] = {"D%":3.4180941228106606e+307,"=":"","b{(na":"","S":"pzp","@&":2.9881532916168127e+306,"":"-","6.718736043067616e+306":"k","4.679331694918509e+307":"","5.711919236719437e+307":""}
return a-b-c
};
var base_0 = [49,122]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,122]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,122]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,122]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test38.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)