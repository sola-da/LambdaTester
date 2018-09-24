





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['18{'] = false
return a/b+c*d
};
var argument2 = "<'";
var argument3 = "";
var argument4 = {"242":"","893":618,"969":"&","8.15405401991388e+307":1.6513467508014415e+308,"":"","X0":"X","5.384987341943911e+307":-100,"#R[+":213};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[595] = 1.6934098287529093e+308
return a+b*c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a-b+c*d
};
var argument7 = 2.0707168441712604e+307;
var argument8 = [-1,823,49,213,242,49,595,595,49,607];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[893] = ["-",1.7976931348623157e+308,"b","FP^",595]
argument9[3] = true
argument10[82] = {":xd?HuU":"h","9.243369891714256e+307":"I&","":4.552447466376494e+307,"1.6222334637090283e+308":""}
return a*b-c+d
};
var argument10 = 3.353341194377288e+307;
var base_0 = ["s","Bs","p6w"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["s","Bs","p6w"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["s","Bs","p6w"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["s","Bs","p6w"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test506.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)