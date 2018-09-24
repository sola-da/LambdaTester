





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][7] = 5.714385769020246e+307
return a+b-c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = {"49":2.851493458759851e+307,"403":"Y","843":8.999022409536785e+307,"N":-1,"9.721534358436573e+307":"","":783,";m":""}
return a-b*c
};
var argument5 = {"157":1.6975347632981934e+308,"1.1256572151750166e+308":"L?","1.0525060036565042e+308":"g","1.42524407385306e+308":"Wu","Y0qj":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.3156198695370476e+307] = "8"
argument8[3] = false
argument6 = null
return a/b+c
};
var argument7 = true;
var argument8 = [-100,655,-100,-1];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = ""
argument11[3] = false
base_3[0][0] = null
return a-b*c
};
var argument10 = r_0;
var argument11 = ["o+AodSv","<","Pg$",",Ig1"];
var base_0 = ["g",">","^","C","17k","k"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["g",">","^","C","17k","k"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["g",">","^","C","17k","k"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["g",">","^","C","17k","k"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test326.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)