





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"":595,"A":714,"7.771442629080406e+307":"","0b)":")|d","-100":""}
argument2['c'] = "g_"
argument3[1.4034744228995816e+308] = "`?"
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = {"8":-1,"618":893,"1.443935436011749e+308":157,"":823,"eODF0N":1.737859796267207e+308,"g":"","S":9.859714342266016e+307}
base_1[2][1] = {"?":714,"-1":"9","x":"","4.988780277357191e+306":"^>H3","1.0370637471636989e+308":",E","":3.17508817353492e+307}
argument4[5] = 1.292416029019087e+308
return a*b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = 1.7619044616297938e+308
argument5[4] = [783]
return a+b*c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = null
return a/b/c
};
var argument6 = r_1;
var argument7 = r_1;
var base_0 = [843,100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,100]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,100]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,100]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test677.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)