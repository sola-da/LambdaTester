





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = [242,157,783,49,-1,25,893,627]
base_0[0] = 8.009209841449468e+307
base_0[0][1] = ["y","n=Ip=",893,82,242,"="]
return a*b-c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = ""
base_1['length'] = {"49":"","595":"97U","yjP":"","R":4.2482030971080024e+307}
argument5[0] = null
return a/b+c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = null
base_2[0] = [823,"U2","su",157]
return a-b+c
};
var argument6 = ["59]0&","t","s",":j","yI","1@w;"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = "m"
argument8[1.399309004356655e+308] = 714
base_3[0] = ["&(","!p[#X","OR@","T","X|","l","]=G"]
return a+b-c
};
var argument8 = [126,122,595,242,893,783,126,-1];
var base_0 = [705,655,59,607,0,823]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,655,59,607,0,823]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,655,59,607,0,823]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,655,59,607,0,823]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test104.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)