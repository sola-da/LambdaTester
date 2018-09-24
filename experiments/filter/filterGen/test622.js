





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = {"0":"","242":823,"9.11450434539823e+307":"C","":"","l+O":"%Ey"}
argument3[242] = null
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.7847438319683965e+308] = 157
return a*b-c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1.3434821406183095e+308] = "N"
argument5[5] = {"7.507442107612259e+307":4.0582038831144623e+307,"":7.514713524044918e+307,"XibuN":1.555454770145325e+308,"V":0}
base_2[3][0] = ["YQ"]
return a+b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][7] = {"213":1.3282557180373944e+308,"705":100,"`":6.824717510581504e+307,"Z":1.5816443968541295e+308,"1.5247849260069696e+308":"D","J+<":"","N)":""}
return a*b-c
};
var base_0 = [0,-1,607,213,403,783,-100,100,5e-324,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,-1,607,213,403,783,-100,100,5e-324,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,-1,607,213,403,783,-100,100,5e-324,618]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,-1,607,213,403,783,-100,100,5e-324,618]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test622.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)