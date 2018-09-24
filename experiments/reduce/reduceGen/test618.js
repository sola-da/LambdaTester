





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = true
argument3[5] = ""
base_0[6] = "J"
return a*b+c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = null;
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2.1280896016417002e+307] = 1.6700449843956165e+308
base_1 = "U"
argument3 = null
return a+b/c/d
};
var argument7 = false;
var argument8 = false;
var argument9 = {"":"","8.815904311734995e+307":2.2446267012108636e+307,"3.7765517850619445e+307":"=","6.73365913785067e+307":7.185445774500423e+307,"i":82,"M#1?bA":"-","8.197729206430888e+307":9.50186063696987e+307};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = false
return a-b*c*d
};
var argument11 = "";
var argument12 = false;
var argument13 = null;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[7] = false
argument12[1.1277822633002616e+308] = null
return a*b*c*d
};
var base_0 = [714,705,403,-1,100,-1,25,607,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,705,403,-1,100,-1,25,607,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,705,403,-1,100,-1,25,607,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,705,403,-1,100,-1,25,607,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test618.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)