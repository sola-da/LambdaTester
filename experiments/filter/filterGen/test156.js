





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = null
base_0[5] = [100,242]
return a-b+c
};
var argument2 = {"126":"iI<","403":"","1.3874363106184942e+308":1.6517706952938182e+308,"":213,"g":1.7934322767504782e+308,"1.7280963300438886e+308":7.162876586755669e+307,"1.7976931348623157e+308":-1,"1.6706343314769343e+307":"`pt","-100":"6Z"};
var argument3 = {"59":1.7814522403808152e+308,"8.09253689157691e+307":"","":"_","1.205367971338158e+307":"^","3.2189715807195713e+307":"","x":"4","1.5718259859830486e+308":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8][3] = ""
base_1[7] = [":","75","&D*:y","+"]
return a+b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = null
return a/b-c
};
var argument7 = null;
var argument8 = -1;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = {"714":0,":":"","1.7131455901370266e+308":""}
argument10[2] = {"893":"","1.9314447616546257e+307":49,"":618,"*k":6.348318171591016e+307,"e":"","1.3301876240404417e+308":460}
return a-b+c
};
var argument10 = null;
var base_0 = ["*","U2lY","_","a",";","TD",">","-6"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*","U2lY","_","a",";","TD",">","-6"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*","U2lY","_","a",";","TD",">","-6"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*","U2lY","_","a",";","TD",">","-6"]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test156.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)