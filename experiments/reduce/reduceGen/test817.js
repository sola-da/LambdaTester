





var callbackArguments = [];
var argument1 = [607,-1,627,-1];
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.3938918493123786e+308] = true
return a+b+c/d
};
var argument5 = true;
var argument6 = r_0;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = null
argument7[4] = ""
argument7 = ""
return a/b+c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.1532786076532189e+308] = [0,823,"Gs-"]
argument9[8] = 1.6599127565791688e+308
argument10[-1] = true
return a+b/c/d
};
var argument10 = 1.6143102815974943e+308;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = 9.373818655356449e+307
argument13[0] = false
return a*b+c+d
};
var argument12 = 1.7368594871756602e+308;
var argument13 = r_0;
var base_0 = ["6:bi",")","<","a","Pbx","<x,","-"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6:bi",")","<","a","Pbx","<x,","-"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6:bi",")","<","a","Pbx","<x,","-"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6:bi",")","<","a","Pbx","<x,","-"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test817.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)