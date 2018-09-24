





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = false
return a-b-c*d
};
var argument2 = true;
var argument3 = r_0;
var argument4 = "#*";
var argument5 = r_0;
var argument6 = [213,783,607,714,783,403,0,655,618];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6.35085648319999e+307] = null
argument6[4] = {"":1.144086858960119e+308,"4.1262264656324897e+307":"}%E","1.5369567589412995e+308":"","3.357194290061613e+306":4.536588896822266e+306}
base_1[0][4] = false
return a-b/c/d
};
var argument8 = r_1;
var argument9 = false;
var argument10 = "!";
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[893] = {"1.1128190076318547e+308":"qwwv","O4M":59,"1.1733121407844689e+308":"y","":4.887259702307234e+307,"2.7564765257967287e+306":"I !FAh"}
argument9[2] = false
argument10[4] = {"7":"c","242":"","627":627,"9.037942292656302e+307":"","6.884508872484048e+307":0,"5e-324":"e4m;i]!","1.668567162344187e+307":"iH"}
return a/b-c-d
};
var argument12 = r_1;
var argument13 = null;
var argument14 = null;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[1] = 618
argument13[5] = null
base_3[7] = [0,"y"]
return a/b/c*d
};
var base_0 = ["E","1tS","(",595,"QD","32h","aj7UT"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E","1tS","(",595,"QD","32h","aj7UT"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E","1tS","(",595,"QD","32h","aj7UT"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["E","1tS","(",595,"QD","32h","aj7UT"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test423.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)