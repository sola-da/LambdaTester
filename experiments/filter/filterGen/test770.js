





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.0546776681946723e+308] = {"783":1.3107131183454087e+308,"893":4.534792221502822e+307,"":"e","2.2217589797191006e+307":0}
return a*b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5.262931091360336e+307] = null
argument5[1.4034744228995816e+308] = ["i{ZI","@4","[","-"]
return a+b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = true
base_2[3][1.3434821406183095e+308] = ""
return a*b-c
};
var argument5 = null;
var argument6 = {"0":"","122":"-=W8","126":714,"2.2113204324846106e+307":"I","6.170859824603625e+307":"","1.7031037497782945e+308":"","$3":157,"":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[714] = ""
argument9[5] = ""
base_3[6] = false
return a/b*c
};
var argument8 = null;
var base_0 = ["U|",">ry",627,"p","Y+"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U|",">ry",627,"p","Y+"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U|",">ry",627,"p","Y+"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U|",">ry",627,"p","Y+"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test770.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)