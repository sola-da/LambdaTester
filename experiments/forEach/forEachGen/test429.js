





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = null
argument1['1SHF1'] = ["{","sf","B","1"]
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['am'] = {"843":"oL9","5.476031541052711e+307":"KK","d":59,"6.9453331124140734e+305":893,"p":"%Z"}
return a/b+c
};
var argument3 = "";
var argument4 = {"G2":"'","":783,"3.462967293930506e+307":"","W)":595,"exu":"","1.2199143612541599e+308":"","1.685816526105524e+308":6.235255050086651e+307};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][1] = ":U#"
return a+b/c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = 7.653252076141235e+307
return a-b*c
};
var base_0 = ["[","l11","O","lem","cO%*]","])","e","N"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[","l11","O","lem","cO%*]","])","e","N"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[","l11","O","lem","cO%*]","])","e","N"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[","l11","O","lem","cO%*]","])","e","N"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test429.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)