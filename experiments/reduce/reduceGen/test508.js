





var callbackArguments = [];
var argument1 = null;
var argument2 = {"460":"","893":"","":"lJ","l":"#^P^","3.8931841117686357e+307":""};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = true
base_0[2] = null
argument3[2] = false
return a/b+c*d
};
var argument5 = ["d","#","S","m>","my","]","]C"];
var argument6 = r_1;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = 242
argument5[1] = [403,618,82,843,59,655,627,705]
return a-b/c*d
};
var argument9 = r_2;
var argument10 = null;
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['s'] = "="
argument9['s'] = 213
argument9[2.1869172855352885e+307] = ["z","k","rw","$7(","L",157,"%","cR","7",82]
return a*b-c*d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[0] = true
argument14[3] = null
argument14[7] = null
return a+b+c-d
};
var argument14 = null;
var argument15 = null;
var base_0 = [122,0,213,25,969,969,627,783,627,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,0,213,25,969,969,627,783,627,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,0,213,25,969,969,627,783,627,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,0,213,25,969,969,627,783,627,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test508.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)