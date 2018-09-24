





var callbackArguments = [];
var argument1 = true;
var argument2 = "";
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][0] = {"3":"","100":"","&l5N![_":"XN#:","}":"FK"}
return a/b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['s'] = true
return a*b-c-d
};
var argument6 = {"460":843,"":6.376554290485816e+307,"i":-1,"DOb":3.6083472067713374e+307};
var argument7 = true;
var argument8 = 595;
var argument9 = 2.168823353453559e+307;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = ""
return a/b/c/d
};
var argument11 = null;
var argument12 = null;
var argument13 = 25;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[6.35085648319999e+307] = true
return a*b-c-d
};
var base_0 = [100,126,122,893,25,655,843,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,126,122,893,25,655,843,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,126,122,893,25,655,843,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,126,122,893,25,655,843,100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test883.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)