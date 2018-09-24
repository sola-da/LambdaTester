





var callbackArguments = [];
var argument1 = 1.0587847107262283e+308;
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = {}
return a-b-c+d
};
var argument5 = null;
var argument6 = 9.587835539272935e+307;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[627] = true
return a/b-c/d
};
var argument9 = 1.693657200647655e+308;
var argument10 = r_2;
var argument11 = {"42":"","242":655,"627":1.3280825941871563e+308,"?":1.0053193775551365e+307,"3A":"","1.6178787787606634e+308":6.302943148532614e+307};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.1277822633002616e+308] = true
argument9[9] = 1.6494589936890037e+308
return a+b*c/d
};
var argument13 = r_2;
var argument14 = false;
var argument15 = false;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[0] = null
base_3[2] = true
argument13['s'] = 1.681914868967491e+308
return a-b*c+d
};
var base_0 = ["U","b6","T+gh]"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U","b6","T+gh]"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U","b6","T+gh]"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U","b6","T+gh]"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test494.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)