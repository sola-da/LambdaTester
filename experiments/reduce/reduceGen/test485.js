





var callbackArguments = [];
var argument1 = ["z","B",")"];
var argument2 = "b";
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = [607]
argument3['*c'] = "C8"
return a*b/c*d
};
var argument5 = "";
var argument6 = r_1;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = [823,0,627,49]
base_1[0][4] = null
return a-b-c+d
};
var argument9 = false;
var argument10 = 126;
var argument11 = 1.7819873862843416e+308;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = "&)"
base_2[2][0] = null
return a-b*c+d
};
var argument13 = [-1,969];
var argument14 = ["e","^;J7",82,126,"86","[A","e","e","v"];
var argument15 = "22";
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[2] = "X0"
argument13[3] = [655,-100,893,893,-100,705,213,893]
argument14[25] = [607,460,25,618,213,783,969,627,823]
return a*b-c+d
};
var base_0 = ["V_","v=>x",705,403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V_","v=>x",705,403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V_","v=>x",705,403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V_","v=>x",705,403]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test485.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)