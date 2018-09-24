





var callbackArguments = [];
var argument1 = r_0;
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = ",k"
argument3[0] = [595,100,82,100,25]
argument2[1.4205726959827606e+308] = [403,705,655,59]
return a-b+c/d
};
var argument5 = "AX";
var argument6 = null;
var argument7 = [0,-1,893,126,969];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6.35085648319999e+307] = false
argument6[403] = 705
return a/b*c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5.71178064163152e+307] = ""
return a/b+c-d
};
var argument10 = null;
var argument11 = true;
var argument12 = r_3;
var argument13 = r_3;
var argument14 = 5e-324;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[893] = {"82":1.4820803333880633e+308,"893":242,"3.547020130573739e+307":49,"!":0,"L":0,"b@=Ks":"Km","@R":893,"":1.131134657428475e+308}
argument14[627] = {}
argument14[655] = ["5=g","L","%","pi",">2","a",">U","da:","Z","A"]
return a+b/c/d
};
var base_0 = ["h|","*","zt","MF",")`g3","3",";","]Z"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h|","*","zt","MF",")`g3","3",";","]Z"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h|","*","zt","MF",")`g3","3",";","]Z"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h|","*","zt","MF",")`g3","3",";","]Z"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test954.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)