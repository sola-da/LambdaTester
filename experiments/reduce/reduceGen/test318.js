





var callbackArguments = [];
var argument1 = false;
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = -1
argument2[627] = "r"
argument3[59] = 6.663502227701507e+307
return a*b/c*d
};
var argument5 = 8.548026578030643e+307;
var argument6 = [213,607,-1,242];
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = 4.214750906819169e+307
argument6[7] = false
return a*b/c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = ["7Qv@",627,"&L","l",242,"Y","z",618,"3"]
argument9[8] = null
argument10[403] = true
return a*b/c-d
};
var argument10 = r_2;
var argument11 = false;
var argument12 = r_2;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][9.12287810829114e+307] = "v"
return a/b-c/d
};
var base_0 = [783,460,-1,1.7976931348623157e+308,823,59,893,157]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,460,-1,1.7976931348623157e+308,823,59,893,157]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,460,-1,1.7976931348623157e+308,823,59,893,157]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,460,-1,1.7976931348623157e+308,823,59,893,157]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test318.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)