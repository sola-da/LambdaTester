





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = {"82":"","714":705,"l":"w"}
base_0[9] = null
base_0[1][2] = "a"
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = ["K","9>t<u25","0","Z<"]
base_1[3][1.3434821406183095e+308] = ["L","0`{",100,"%+lp"]
return a/b-c
};
var argument3 = r_0;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][1] = "o"
base_2[3][1.3434821406183095e+308] = false
base_2[4][4] = {"0":823,"49":893,"126":783,"oEK":"!Nf","T":"d","9.694976984581749e+307":655,"F":"]7<","":"","d":"","6.488907300194827e+307":843}
return a/b*c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = false
base_3[1] = {"B`":"y","":" ","1.1733613336716808e+308":-1,"8.73360236081985e+307":2.7923859255021277e+306,"7.340760099268839e+307":607}
argument7[7.92397107964922e+307] = null
return a/b-c
};
var base_0 = ["5G^T@z","d@G","9","GD","0:HiL:g}`","w","S","}V%"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5G^T@z","d@G","9","GD","0:HiL:g}`","w","S","}V%"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5G^T@z","d@G","9","GD","0:HiL:g}`","w","S","}V%"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5G^T@z","d@G","9","GD","0:HiL:g}`","w","S","}V%"]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test136.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)