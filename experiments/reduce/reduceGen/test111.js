





var callbackArguments = [];
var argument1 = r_0;
var argument2 = true;
var argument3 = 607;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = 1.931899559161299e+306
argument2[1.1277822633002616e+308] = {"655":"","":"","oU-c":"","VG":""}
base_0[2] = ""
return a/b-c-d
};
var argument5 = 100;
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = null
base_1[3] = 1.0815444872011124e+308
base_1[6] = ""
return a*b-c+d
};
var argument9 = "'";
var argument10 = r_1;
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[213] = ""
return a*b-c-d
};
var argument13 = true;
var argument14 = [59,705,49,705,627,893,122,969,460];
var argument15 = false;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[7.463432409233234e+307] = ""
return a+b-c+d
};
var base_0 = ["F","+","&Z::i,","}","x","JLwJ","H","]","-7|%*"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["F","+","&Z::i,","}","x","JLwJ","H","]","-7|%*"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["F","+","&Z::i,","}","x","JLwJ","H","]","-7|%*"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["F","+","&Z::i,","}","x","JLwJ","H","]","-7|%*"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test111.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)