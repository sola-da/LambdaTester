





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = 9.252017709479569e+307
return a/b-c*d
};
var argument2 = "";
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = null
base_1[1][3] = null
argument3[7] = {"":82}
return a/b+c+d
};
var argument6 = null;
var argument7 = true;
var argument8 = [783,893,783,126,157];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.1277822633002616e+308] = [607,"SG&",607,"^",82,-100,705]
return a-b/c-d
};
var argument10 = null;
var argument11 = "NU";
var argument12 = ["4",1.7976931348623157e+308];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = {}
base_3[4] = true
argument11[627] = [1.7976931348623157e+308,122,607]
return a/b+c+d
};
var base_0 = [",N4","Ts","kPm","Dgd","C","}","z+","^","ak"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",N4","Ts","kPm","Dgd","C","}","z+","^","ak"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",N4","Ts","kPm","Dgd","C","}","z+","^","ak"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",N4","Ts","kPm","Dgd","C","}","z+","^","ak"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test175.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)