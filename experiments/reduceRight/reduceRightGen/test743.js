





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = [893,"T",1.7976931348623157e+308,"^","q",49,213,"%",460]
return a-b+c-d
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['T'] = 49
argument5[3] = "5"
base_1[0][0] = null
return a-b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = false
return a-b+c/d
};
var argument6 = null;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['8('] = null
base_3[1][5] = 823
return a*b-c*d
};
var argument9 = {"714":5.418377137632851e+307,"969":"","1.2314614140161055e+308":"","":"Pb","^N":"","7.292240291600865e+307":">U9R","A":"","9.008622320831623e+307":"","1.206132471450014e+308":1.643180836976557e+307};
var argument10 = "4";
var base_0 = ["<","f","jC","gL8;;12@:@6","1Py","}","y}dm"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<","f","jC","gL8;;12@:@6","1Py","}","y}dm"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<","f","jC","gL8;;12@:@6","1Py","}","y}dm"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<","f","jC","gL8;;12@:@6","1Py","}","y}dm"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test743.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)