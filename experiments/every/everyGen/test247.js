





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = [242,49]
base_0[0][0] = 823
base_0[6] = null
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = ["I?b","I","R","p?|","fo","l",";2"]
base_1[2] = 213
return a+b/c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[403] = 627
argument5[3] = null
return a-b*c
};
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = true
base_3[0][6] = [607,25,607,403,627,783,25,783]
base_3[3] = false
return a-b+c
};
var base_0 = [122,607,"X",157]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,607,"X",157]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,607,"X",157]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,607,"X",157]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test247.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)