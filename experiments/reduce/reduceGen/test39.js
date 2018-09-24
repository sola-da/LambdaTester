





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
argument1 = ["yK","m","Dy<","la"]
argument2[3] = {"213":2.5095553697318185e+307,"843":"wDyFp%","9.88184128297285e+307":"(","":"#+","oN":618,"c":"xs"}
return a/b+c/d
};
var argument2 = r_1;
var argument3 = true;
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = null
base_1[2] = [-1,157,460,403,607,213,122]
argument3[0] = null
return a*b-c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = "1;"
base_2[1] = {"1.5551824120649825e+308":9.58648205583478e+307,"2.435341218670011e+307":"`="}
base_2[7] = true
return a-b+c*d
};
var argument7 = [157,59,893,714,595,25,157];
var argument8 = {"0":6.925671473097306e+306,"4":893,"705":100,"893":"","":714,"3.2789088158878554e+307":"","YD":1.595511630167922e+307,"1.3395855373794917e+308":5.791921964043048e+307,"9.684786761823976e+307":2.2093084611933737e+307,"c":""};
var argument9 = null;
var argument10 = r_2;
var argument11 = r_2;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[4] = 1.438310093778799e+308
return a*b/c*d
};
var base_0 = [655,82,595,595,403,595,969,157]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,82,595,595,403,595,969,157]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,82,595,595,403,595,969,157]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,82,595,595,403,595,969,157]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test39.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)