





var callbackArguments = [];
var argument1 = null;
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1869172855352885e+307] = null
argument2[627] = null
return a-b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = null
argument6[82] = null
return a/b*c*d
};
var argument6 = false;
var argument7 = ["E","p","US","B","b31"];
var argument8 = "h";
var argument9 = 7.275531171717037e+306;
var argument10 = 213;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[627][126] = {"8":"'k|j","25":"","403":"","893":1.2757182606034946e+308,"":126,"8.202524596568263e+307":"","4.3381963069120133e+307":1.2874396123241882e+308}
argument8[893] = false
base_2[4] = {"7":618,"893":"H","":"u4","H":595,"6.554752476909879e+307":1.3612998837583666e+308,"3.9588546946017315e+307":1.2649392475586269e+308,"n6&S":714,"4.749797184248753e+307":"","zkhU":"C"}
return a-b-c+d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14['*c'] = "L"
argument14[7.889879335222838e+307] = 1.7976931348623157e+308
return a+b-c*d
};
var argument13 = r_2;
var argument14 = false;
var base_0 = [705,157,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,157,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,157,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,157,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test710.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)