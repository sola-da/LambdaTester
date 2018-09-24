





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['-'] = [969,213,126,714,595,655,823]
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[49] = 3.3492801083873166e+307
base_1[4] = 157
return a+b-c
};
var argument3 = r_1;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['1SHF1'] = 1.3679739931894994e+308
argument6[3.462967293930506e+307] = ""
base_2[0][0] = false
return a-b+c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.3130321063336282e+308] = 122
base_3[2][8.05235215815219e+307] = null
return a*b-c
};
var argument7 = false;
var argument8 = {"0":4.594914922680931e+307,"1":618,"!9":1.575840838889709e+308,"1.6166900270323718e+308":"b3","1.1664692668886877e+308":"","":705,"B":"N"};
var base_0 = ["J a","+u","ps`",",","hl","]Mo*="]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["J a","+u","ps`",",","hl","]Mo*="]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J a","+u","ps`",",","hl","]Mo*="]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J a","+u","ps`",",","hl","]Mo*="]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test634.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)