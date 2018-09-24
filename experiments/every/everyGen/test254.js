





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {"783":1.1851335643896694e+308,"843":1.386926132106194e+308,"1.3257286162365456e+308":"","":"V","Gl":242,"hK9P":655}
return a+b/c
};
var argument2 = {"607":122,"1.3209398486365548e+308":"}","":595,"1.3599216339661573e+308":"","6.6663225674606e+307":618,"?Fh-":1.0431233455514162e+308};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[122] = [403,0,783,157,893,25,893,213,49,242]
argument4[4] = null
return a/b+c
};
var argument4 = r_1;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = "pg"
return a+b+c
};
var argument7 = null;
var argument8 = {"":1.4788902411269567e+308};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][7] = null
argument11[2] = ""
return a/b+c
};
var argument10 = null;
var argument11 = "";
var base_0 = [705,607,82,655,893,"z"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,607,82,655,893,"z"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,607,82,655,893,"z"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,607,82,655,893,"z"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test254.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)