





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['sJRZP'] = "rh^_]i:{?"
argument2[4.960033715165713e+307] = ""
argument2[4.960033715165713e+307] = null
return a*b-c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = ["-","3?nsd","oj","h","CS=]","i","<"]
argument6[4] = null
return a+b-c
};
var argument5 = r_0;
var argument6 = {"607":1.471655531909391e+308,"655":1.170781556238373e+307,"714":1.5888853631407422e+307,"":"","2.62056194668545e+307":"","a":"*r=","L":"9","4.682107114539375e+307":3.0619002413884896e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4.960033715165713e+307] = "T"
argument8[3.3156198695370476e+307] = null
return a/b-c
};
var argument8 = r_0;
var argument9 = true;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['sJRZP'] = 1.1082561191729459e+308
return a/b/c
};
var base_0 = [893,213,655,100,714,213]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,213,655,100,714,213]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,213,655,100,714,213]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,213,655,100,714,213]
var r_3= undefined
try {
r_3 = base_3.every(argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test485.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)