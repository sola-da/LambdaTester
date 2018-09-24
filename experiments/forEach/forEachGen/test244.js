





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][4] = [59,714,460,"F"]
argument1[7.92397107964922e+307] = 59
argument2[-1] = 5.102642255905493e+307
return a*b-c
};
var argument2 = {"82":2.8808528513127823e+307,"157":"","607":"8@$ux","969":"=,I","2.2670869284533007e+307":"uty"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = 126
base_1[3][1.3434821406183095e+308] = true
argument3['1SHF1'] = null
return a-b*c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][823] = {"823":1.7976931348623157e+308,"":"L4","D":",e","1.7367404022949642e+308":8.07176255139416e+307,"Y":"#s","1.2010091465708683e+308":1.6818761753542846e+307,"5.717271684236853e+307":655}
argument7[1.4034744228995816e+308] = [213,5e-324,49,25]
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = ["c","u","evT>$","(d","n"]
argument7[126] = null
return a+b-c
};
var base_0 = [59,460,122,0,49,25,59,969]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,460,122,0,49,25,59,969]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,460,122,0,49,25,59,969]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,460,122,0,49,25,59,969]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test244.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)