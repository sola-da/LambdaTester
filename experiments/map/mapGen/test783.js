





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = 122
return a*b-c
};
var argument2 = "d";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.268696794505825e+308] = true
return a-b/c
};
var argument4 = ["O","])Z","]T","[","c<Ye","a"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][4] = {"1.4819964403054266e+308":"?@6","":""}
base_2[3][2][5] = false
base_2[2][5] = {"595":1.4461126861331803e+308,"1.3057996624013722e+308":"","1.6903429778338936e+308":-100,"o]":100," u7":"","hQ":59,"":100,"26KdBh":"","5.594584924091458e+307":5.323991410450977e+307}
return a-b+c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = {"":969}
return a*b*c
};
var argument8 = true;
var argument9 = null;
var base_0 = [893,893,49,82,823,59,714,893,242,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,893,49,82,823,59,714,893,242,-1]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test783.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)