





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = null
base_0[6] = false
base_0[1][2] = {"213":9.043591489142468e+306,"714":9.449950900487292e+307,"893":-1,"969":"d","V":969,"":"a%","}^AH)ps]6":2.422265415749128e+307,"'":82,"5.823309861301795e+307":2.3629875580505664e+307,"6&":8.336121969350108e+307}
return a+b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = false
return a*b-c
};
var argument4 = "&";
var argument5 = 242;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = "C5"
argument7[3.3156198695370476e+307] = ""
argument7[4.960033715165713e+307] = 607
return a*b+c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = 705
return a-b+c
};
var argument9 = true;
var base_0 = ["x=?1J",82,5e-324,"%"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["x=?1J",82,5e-324,"%"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["x=?1J",82,5e-324,"%"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["x=?1J",82,5e-324,"%"]
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
require("fs").writeFileSync("./experiments/every/everyGen/test394.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)