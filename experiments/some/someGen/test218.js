





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = null
argument3['T'] = 627
base_0[2][5] = "NuXs"
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = true
base_1[4][7] = 5.370171521587114e+307
return a/b+c
};
var argument3 = null;
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['T'] = false
base_2[1] = false
return a+b+c
};
var argument6 = {};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = null
argument9[6] = -1
argument8[1] = null
return a-b/c
};
var base_0 = ["i","s","}}6","-","#","lB6","H^dX$","n","7"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i","s","}}6","-","#","lB6","H^dX$","n","7"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i","s","}}6","-","#","lB6","H^dX$","n","7"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["i","s","}}6","-","#","lB6","H^dX$","n","7"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test218.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)