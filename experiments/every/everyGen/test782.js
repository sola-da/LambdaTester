





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['io'] = ""
argument3[0] = null
base_0[2] = null
return a*b+c
};
var argument2 = {};
var argument3 = [-1,242,607,100,783,49,627,82];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = null
base_1[0] = true
argument5[8] = {"":1.200030503210087e+308}
return a/b/c
};
var argument5 = false;
var argument6 = {"25":705,"":"","1.7976931348623157e+308":"*","6.409501193209735e+307":213,"1.1419424153903228e+308":"","4.1363472574202606e+307":1.4827179202663585e+307,"1.3941650198920235e+308":1.3880974201329266e+308};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = 242
base_2[8] = 1.4053840958519652e+308
argument8['g]'] = ""
return a*b/c
};
var argument8 = r_1;
var argument9 = true;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12 = null
argument11[783] = {"126":1.4738329220667739e+308,"607":"","843":"j","":"s",">=J<":-100,"w":"","4.546673068556621e+307":"d","9.884777161077073e+307":1.171811120372335e+308,"8ke":1.0920454768759994e+308}
argument11[6] = 49
return a+b*c
};
var base_0 = [100,823,5e-324,213,618,627]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,823,5e-324,213,618,627]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,823,5e-324,213,618,627]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,823,5e-324,213,618,627]
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
require("fs").writeFileSync("./experiments/every/everyGen/test782.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)