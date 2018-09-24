





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.3599216339661573e+308] = true
argument2[5] = 5.1745730570703406e+306
argument3[5] = 5.297686382314351e+307
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][6] = {"59":6.544758930237734e+307,"627":-1,"8.164041119564798e+307":1.7209918543711752e+308,"j":627,"5.49217269291444e+307":-100,"-1":0,"":"","2.0503838997626077e+307":"AT"}
base_1 = ""
argument4[4] = true
return a/b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = null
base_2[0][6] = 705
return a/b*c
};
var argument4 = 1.1267490894448524e+308;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['io'] = [-100,242,607,59,0,403,893,618,655,59]
argument5 = ",p"
return a-b+c
};
var argument6 = null;
var base_0 = ["ov",5e-324,460,595,"R#Rt1w",893,618,595,705]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ov",5e-324,460,595,"R#Rt1w",893,618,595,705]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ov",5e-324,460,595,"R#Rt1w",893,618,595,705]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ov",5e-324,460,595,"R#Rt1w",893,618,595,705]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test647.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)