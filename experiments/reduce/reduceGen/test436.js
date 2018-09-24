





var callbackArguments = [];
var argument1 = [5e-324,403,"q","Hs","q",25,783,"mKy"];
var argument2 = "";
var argument3 = {"126":607,"607":100,"":"","4.1567169018634616e+307":82,"FsX":1.6005150876841966e+308,"2.3254772693344246e+307":1.5369174652991813e+308,"*":843,"g":"x)"};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = true
base_0[9] = {"82":126,"823":8.919255463352278e+307,"969":"1m","1.4568975791370908e+308":"[S","":"<F","[":""}
base_0[1] = ""
return a+b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = null
argument7[6.35085648319999e+307] = null
return a+b-c/d
};
var argument6 = r_0;
var argument7 = null;
var argument8 = "";
var argument9 = r_1;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = [607,618,82,969,655,595,0,59,893]
base_2[3] = false
return a+b-c+d
};
var argument11 = true;
var argument12 = false;
var argument13 = null;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[3] = ">sdk"
argument13[6.35085648319999e+307] = ""
return a*b*c+d
};
var base_0 = [893,213,82,-1,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,213,82,-1,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,213,82,-1,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,213,82,-1,714]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test436.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)