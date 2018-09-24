





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = [705]
argument1[1] = ["e","4&","YR$",")","8","j"]
argument1[1] = "L"
return a*b-c+d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[59] = false
argument4['Cb'] = ""
return a-b/c/d
};
var argument5 = 157;
var argument6 = "";
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = [49]
argument6[7] = 1.094779993633012e+308
return a+b+c*d
};
var argument9 = r_3;
var argument10 = 49;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['l&'] = 1.288324420295482e+308
return a*b-c/d
};
var base_0 = [-1,607,403,714,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,607,403,714,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,607,403,714,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,607,403,714,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test912.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)