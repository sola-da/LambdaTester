





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['c'] = false
argument3[7] = {"714":"","-100":"@","2.032129315444174e+307":"","4.735436115502806e+307":1.495989553641834e+308,"1.7976931348623157e+308":"","":"","5.575596295363419e+307":893}
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = false
base_1[0][0] = [5e-324,627]
return a*b*c
};
var argument3 = null;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = {}
return a-b*c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5.262931091360336e+307] = false
argument9[0] = null
return a*b-c
};
var argument8 = null;
var argument9 = 9.703918589247956e+307;
var base_0 = ["+","qK_","Cd","U?R"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+","qK_","Cd","U?R"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+","qK_","Cd","U?R"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test581.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)