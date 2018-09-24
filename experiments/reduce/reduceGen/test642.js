





var callbackArguments = [];
var argument1 = null;
var argument2 = "Ju";
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[59] = null
base_0['length'] = {"7.01524587971615e+307":"","xP":",","iP":2.4519047497110473e+306,":":"","":"%UP","1.0152246671632606e+308":126}
return a+b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = null
argument7['18{'] = ""
return a-b/c-d
};
var argument6 = ["[!Y)!4","z-","5g","|^","U","?","^","$C","F"];
var argument7 = null;
var argument8 = null;
var argument9 = null;
var argument10 = true;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[627] = {"213":"","403":6.343141848325443e+307,"fy7":1.3640172886238806e+308,"-100":"","2.57075938266072e+307":607,"+Ln":8.086974594293131e+307,"":1.6547879784973274e+308,"zZ":9.83610973280476e+307}
argument8[3] = null
return a-b/c-d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = 7.871629923513106e+307
return a/b-c*d
};
var base_0 = [-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test642.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)