





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = {}
argument2[1]['d'] = [0,242,627,213]
argument2[82] = {"460":"","607":969,"783":1.5904011878877677e+308,"g,":1.565375098654375e+308,"":"1",":":1.7485161608100604e+308,"1.0905873973647146e+308":"R","1.2327534357635355e+308":1.1073416810345524e+308,"_IQ8":100}
return a*b-c
};
var argument2 = "}";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = null
argument4[1] = false
base_1[1][0] = true
return a+b-c
};
var argument4 = false;
var argument5 = "Oj";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = ""
argument6 = false
base_2[8] = false
return a+b-c
};
var argument7 = [823,126,5e-324,403,893,403,783,655,157,969];
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = null
argument10[5] = [-100,893,"M1","U","D","p","DB^"]
return a+b+c
};
var argument10 = "]2";
var base_0 = ["#","-","<","J",122,705,"c","`","Q="]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#","-","<","J",122,705,"c","`","Q="]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#","-","<","J",122,705,"c","`","Q="]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#","-","<","J",122,705,"c","`","Q="]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test259.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)