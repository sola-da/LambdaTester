





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = false
return a*b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = [126,655,627,823,607,100]
argument4[3.0885014435567013e+307] = "("
return a*b-c
};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][1] = false
argument7['LK'] = 59
base_2[2] = "]"
return a/b/c
};
var argument6 = -1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = 627
argument8[627] = 618
return a/b/c
};
var argument8 = null;
var argument9 = true;
var base_0 = ["r",100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["r",100]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["r",100]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["r",100]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test950.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)