





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = true
argument2[7] = null
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][0] = ["ck","[|","Ggt","y","fj","3"]
return a+b*c
};
var argument3 = 126;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.9097830510613482e+307] = true
return a+b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['?'] = {"49":"N","1.3484694234643926e+308":"","1.6839367966216082e+308":"9u","tHb":"|Z","G":7.686354561681368e+307}
argument8[1.7394185942769049e+308] = null
base_3[9] = null
return a-b/c
};
var argument8 = {"-100":"x","1.2164137943670913e+308":1.5658132659150413e+308,"V":1.620690883335007e+308,":o":"]","9.849374788741365e+307":"{","":""};
var argument9 = 213;
var base_0 = [655,126,823,655,0,5e-324]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,126,823,655,0,5e-324]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,126,823,655,0,5e-324]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,126,823,655,0,5e-324]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test638.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)