





var callbackArguments = [];
var argument1 = {"25":"@'MfD>|","49":823,"893":618,"":0,"M*":"","AT":"ZHW","-100":""};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = ""
return a-b+c/d
};
var argument5 = true;
var argument6 = ["b`","-","h^_]i:{?","m"];
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = ""
base_1[3] = null
base_1[8] = ""
return a-b-c-d
};
var argument9 = r_1;
var argument10 = null;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['*c'] = [213,"h"]
return a/b+c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[82] = 1.3630717988635597e+308
argument14[4] = "lDj"
base_3[0][9.12287810829114e+307] = [969,49,82]
return a-b*c/d
};
var argument14 = {"":"a"};
var base_0 = [714,655,618,714,-100,403,126,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,655,618,714,-100,403,126,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,655,618,714,-100,403,126,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,655,618,714,-100,403,126,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test409.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)