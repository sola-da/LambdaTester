





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][1] = 2.6821213003992284e+307
argument3 = 59
return a/b/c
};
var argument2 = 6.15151422207761e+307;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = [655,242,100,0,157,823,213,"8Q"]
argument4[-1] = ""
base_1[0][823] = 9.057972340198462e+307
return a*b+c
};
var argument4 = "c";
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[157] = 6.720872201583471e+307
base_2[4] = false
argument7['wIs'] = 1.1620511478100131e+308
return a/b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = ""
return a-b/c
};
var argument8 = false;
var base_0 = [618,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test366.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)