





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[';N'] = ["f8",783,"@T[",157,823,460,"EdG"]
argument2[5] = {"4":607,"82":"","1.6317999629917414e+308":"Dh,<<<","Kf":"0#","":"","1.1632942347595778e+308":"?sv","4.337416876716839e+307":5.770861782625059e+307,"7.556122403172949e+307":8.001338481077082e+307,"3.942892574118458e+306":655}
argument3[1] = 157
return a+b/c-d
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[25] = 122
argument4[893] = {"595":"*","1.3312210532844804e+308":1.827109510520721e+307,"P":1.0043579636992969e+308,"":"W*3IPNp"}
return a/b+c/d
};
var argument5 = true;
var argument6 = [49,-100,607,-100,-100,25,714,"q"];
var argument7 = null;
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['(R'] = ""
argument8[1.3938918493123786e+308] = {"607":9.010585674404473e+307,"":"","3.5967123003907573e+307":49,"t;Z":82}
base_2[2] = null
return a-b-c/d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[6] = [126,843,82,0]
base_3[0][9.12287810829114e+307] = [595,403,"9","la>9P",969,655,100,460]
return a-b*c+d
};
var argument11 = true;
var argument12 = null;
var base_0 = ["uuL!"," ","sU"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["uuL!"," ","sU"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["uuL!"," ","sU"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["uuL!"," ","sU"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test851.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)