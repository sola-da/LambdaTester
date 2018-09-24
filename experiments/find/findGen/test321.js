





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = [100,-1,893,783,126,213,126]
base_0[0][6] = {}
argument2[8.748669805137695e+307] = 1.280487721566666e+308
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1] = ""
return a-b*c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = {"969":49,"":-100,"1.4036364781341747e+308":"","g":82,"QF{":";","1.5332033579293083e+308":"`Z","l":"","4.443893398395401e+307":7.204581588180083e+307,"2.245255275509437e+307":"b"}
base_2[9] = null
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = "p*:"
return a+b+c
};
var argument6 = null;
var argument7 = {"843":"","":"","1.337209667055221e+308":783};
var base_0 = [607,460,"mF",0,82,5e-324,655,607,"El$a"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,460,"mF",0,82,5e-324,655,607,"El$a"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,460,"mF",0,82,5e-324,655,607,"El$a"]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,460,"mF",0,82,5e-324,655,607,"El$a"]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test321.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)