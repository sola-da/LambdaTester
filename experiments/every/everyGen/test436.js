





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4.960033715165713e+307] = ""
return a*b/c
};
var argument2 = false;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = 2.5792250598873296e+307
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.3599216339661573e+308] = false
base_2[0][6] = 7.86725452215194e+307
argument6[3.3156198695370476e+307] = ["#","g:f"]
return a-b/c
};
var argument6 = null;
var argument7 = 1.1928581845359937e+308;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = {"6":"a","242":"`","893":"","=":"","":157,"b":"g","1.7441284281338134e+308":157,"1.7382864098205917e+308":""}
base_3[7] = true
base_3[0][6] = [595,823,25,0,969,157,100,705,618]
return a*b+c
};
var argument9 = true;
var base_0 = ["H","l","6","D*<","]","|","K","g","Em9BH"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H","l","6","D*<","]","|","K","g","Em9BH"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H","l","6","D*<","]","|","K","g","Em9BH"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H","l","6","D*<","]","|","K","g","Em9BH"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test436.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)