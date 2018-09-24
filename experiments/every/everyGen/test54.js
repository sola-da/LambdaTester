





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][7] = [618,823,714,5e-324,618,59,49]
base_0[8] = 1.4335192249898034e+308
base_0[1] = {"59":7.706012989805612e+306,"403":"","655":25,"":"","4.3116226601975763e+307":2.324631913426772e+307,"9.15935296115784e+307":705,"1.3117665378048143e+308":823,"1.7119090298303884e+308":705,"__f)":122}
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = ""
base_1[3] = [460,126,0,893,25,126,122,655]
return a/b*c
};
var argument3 = 823;
var argument4 = 1.2723737534566434e+308;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.3156198695370476e+307] = 6.258563408653978e+307
base_2[6] = null
argument6[2] = 1.5346402828221242e+308
return a+b-c
};
var argument6 = [" Cc","U","N"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = null
return a-b+c
};
var base_0 = ["k","a|","u#rh","+","a","r","6O","n"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["k","a|","u#rh","+","a","r","6O","n"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["k","a|","u#rh","+","a","r","6O","n"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["k","a|","u#rh","+","a","r","6O","n"]
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
require("fs").writeFileSync("./experiments/every/everyGen/test54.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)