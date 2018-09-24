





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8] = true
return a*b+c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = {"460":"%H","1.477354027939092e+308":8.418646702841952e+307,"[x":""}
argument5[7] = {"213":"","1.3448023443285831e+308":"",",":"","?":"","":"N","7.756875107081654e+307":""}
return a+b+c
};
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[893] = {"D'":1.1445184870376988e+308,"":4.4143918309059173e+307}
return a/b*c
};
var argument8 = true;
var argument9 = true;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = ""
argument11[7] = 595
base_3[0][6] = ["V3wL-","1",403,"uX","_tM","t","D",893,893]
return a*b*c
};
var argument11 = 655;
var argument12 = null;
var base_0 = ["T","G","k[g","D$","AV","<_E}0Z!rC"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["T","G","k[g","D$","AV","<_E}0Z!rC"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["T","G","k[g","D$","AV","<_E}0Z!rC"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["T","G","k[g","D$","AV","<_E}0Z!rC"]
var r_3= undefined
try {
r_3 = base_3.every(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/every/everyGen/test695.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)