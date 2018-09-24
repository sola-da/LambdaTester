





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"126":2.6738324604435048e+306,"823":"","SKG":"","a3Y":"","":893}
return a-b-c
};
var argument2 = "@R";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = null
base_1[4] = [893,5e-324,100]
return a-b-c
};
var argument5 = "";
var argument6 = "k";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = 607
base_2[1][5] = 1.7142088119308254e+308
argument8[1.3599216339661573e+308] = null
return a/b+c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"49":"|bx^","V=*rJ":"","7.624819829526995e+307":9.277860780019411e+307,"4.3650489853494665e+307":-100,"85sDn":213,"":"","2.560014275756536e+307":""}
base_3[1][2] = false
return a*b/c
};
var argument10 = null;
var argument11 = true;
var base_0 = ["yy",")","K","*X","O","[;"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["yy",")","K","*X","O","[;"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["yy",")","K","*X","O","[;"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["yy",")","K","*X","O","[;"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test734.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)