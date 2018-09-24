





var callbackArguments = [];
var argument1 = {"49":3.729199160468467e+307,"157":"X","+":1.760338567480574e+308,"X":9.438603624160825e+307,"Y":"H$aa","8.828488414297672e+307":9.630819121815675e+307};
var argument2 = true;
var argument3 = 9.033846206940575e+307;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = false
base_0[1][0] = {"122":2.947897890882363e+307,"126":"d)","783":3.8005010088750593e+307,"893":213,"":5.524089871368597e+307,"2.908606200033987e+307":"",",fK":"","9.7915966619577e+307":"F","4.559827007288413e+307":-1}
return a/b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = "z"
argument6[3] = 242
return a+b-c*d
};
var argument6 = true;
var argument7 = true;
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = ""
base_2[6] = false
argument7[213] = {"1.7503457244309372e+308":"H","3.079078298089972e+307":2.464557652272573e+307,"":8.09854554008127e+307,"1.3839968927259908e+308":0,"1.2979244990295718e+308":""}
return a+b/c/d
};
var argument10 = 823;
var argument11 = "";
var argument12 = true;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = null
base_3[4] = null
return a/b-c+d
};
var base_0 = [607,126,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,126,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,126,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,126,823]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test313.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)