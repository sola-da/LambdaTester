





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = null
argument3[6] = ""
argument2[9] = [5e-324,242,-1]
return a*b+c
};
var argument2 = {"823":"n`","9.731670291840328e+307":-1,"1.1705882245452176e+308":8.195430350352284e+307,"1.3064412294633565e+308":""};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = ["t?D",242,25,25,714,"@5x","R"]
return a-b*c
};
var argument5 = {"":49};
var argument6 = "_";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][5e-324] = "S"
base_2[8] = false
return a-b+c
};
var argument8 = null;
var argument9 = {"":""};
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = [969,783,627,618,783,607]
base_3[5] = [59,25,213,705]
return a*b+c
};
var argument11 = r_2;
var base_0 = [5e-324,607,893,0,893,655,100,100,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,607,893,0,893,655,100,100,893]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,607,893,0,893,655,100,100,893]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,607,893,0,893,655,100,100,893]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test122.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)