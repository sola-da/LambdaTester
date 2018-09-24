





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1277822633002616e+308] = null
argument2[4] = [-1,627,655,893,25,618]
return a*b/c/d
};
var argument2 = 714;
var argument3 = ["(V","e","e","z}","^T|","qr","F"];
var argument4 = [655];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.1277822633002616e+308] = 6.663326446683306e+307
base_1[0][3] = null
base_1[0][3] = 1.8792392390317066e+307
return a+b/c*d
};
var argument6 = [126,1.7976931348623157e+308];
var argument7 = false;
var argument8 = {";]^":"","L":"?I"};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][9.12287810829114e+307] = {"126":705,"213":"b","460":"?","823":714,"1.473252768475462e+308":"+","Y?>4":"d^@","":"]","B":8.906449711986766e+307,"3.735125172278983e+306":2.7496424982392083e+307}
return a*b/c*d
};
var argument10 = {"":"{","Td89":82};
var argument11 = r_3;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = [783,627]
base_3[1][3] = true
return a-b-c/d
};
var base_0 = ["u","Ag","7N","<*,z+",5e-324,"H","t{"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u","Ag","7N","<*,z+",5e-324,"H","t{"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u","Ag","7N","<*,z+",5e-324,"H","t{"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u","Ag","7N","<*,z+",5e-324,"H","t{"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test66.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)