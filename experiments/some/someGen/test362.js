





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = ""
return a+b+c
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = "]M"
base_1[4] = {}
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5][0] = 893
base_2[8] = ""
argument6[9] = true
return a/b/c
};
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[157] = {}
argument9[4.224481734419934e+307] = 59
return a-b/c
};
var argument9 = true;
var base_0 = [25,-100,5e-324,823,783]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,-100,5e-324,823,783]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,-100,5e-324,823,783]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,-100,5e-324,823,783]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test362.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)