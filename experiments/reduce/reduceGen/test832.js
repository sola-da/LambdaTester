





var callbackArguments = [];
var argument1 = false;
var argument2 = "l@";
var argument3 = "z";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627][126] = ["< ","C",460,"Z","3G)?",705]
return a*b-c*d
};
var argument5 = false;
var argument6 = {"":3.3482723019927127e+307};
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[460] = null
return a*b*c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = {"3.81668507468447e+307":0,"1.7833580616396995e+308":1.011862986405819e+308,"1.0645222267140227e+308":1.3453002999071065e+308,"Ga_":1.2428004001135944e+308,"1.7976931348623157e+308":242}
return a/b*c+d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[460] = ""
argument12[1] = [783,49]
return a-b*c/d
};
var base_0 = [25,213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,213]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test832.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)