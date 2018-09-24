





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[122] = [")<Kq","zhe>","i","CZW=","&","W","J","L+M"]
return a/b*c
};
var argument2 = 1.3117385969784166e+308;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = [893,783,823]
base_1[4] = null
return a*b-c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = {"213":">V","783":618,"v":"*","oTF":"","6o":"l=","":"","VI@$":705,"N>%":595}
return a+b/c
};
var argument7 = r_0;
var argument8 = r_1;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['sJRZP'] = ""
base_3[4][1.5144566325729397e+308] = {"157":"","618":"","5e-324":"","":"{","3.68091609830744e+307":8.981789316726321e+307}
return a/b/c
};
var argument10 = 126;
var base_0 = ["> ","n","x","I7","&[","&","Bv)pL","HO"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["> ","n","x","I7","&[","&","Bv)pL","HO"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["> ","n","x","I7","&[","&","Bv)pL","HO"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["> ","n","x","I7","&[","&","Bv)pL","HO"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test969.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)