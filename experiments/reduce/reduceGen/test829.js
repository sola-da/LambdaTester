





var callbackArguments = [];
var argument1 = false;
var argument2 = "";
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['s'] = ["S3%_","Us6",655,"g","Yc",-1,126]
return a-b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = {"714":6.859315849019401e+307,"893":49,"":"","1.6934822386299612e+308":""}
argument6[403] = false
return a+b*c-d
};
var argument6 = ["EC","N","(BA","g","?","p+e5",";:h","k>R"];
var argument7 = r_1;
var argument8 = null;
var argument9 = r_1;
var argument10 = "?2";
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][9.12287810829114e+307] = null
return a-b-c+d
};
var argument12 = [595,82,59,122,783,705,595];
var argument13 = false;
var argument14 = 8.343550613736053e+307;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[3] = {"":893}
return a/b-c-d
};
var base_0 = ["|^","s*(w","q_x","$","}g","=km","3h","x3","x"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|^","s*(w","q_x","$","}g","=km","3h","x3","x"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|^","s*(w","q_x","$","}g","=km","3h","x3","x"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|^","s*(w","q_x","$","}g","=km","3h","x3","x"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test829.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)