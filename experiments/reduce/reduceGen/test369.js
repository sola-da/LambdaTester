





var callbackArguments = [];
var argument1 = -100;
var argument2 = true;
var argument3 = 8.437704763068755e+307;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = true
argument2 = true
return a*b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = ""
argument5['s'] = null
return a*b*c+d
};
var argument6 = null;
var argument7 = null;
var argument8 = 126;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = ["]o","r","p","8",157,627,893,"_o","`{"]
return a+b-c*d
};
var argument10 = r_1;
var argument11 = r_3;
var argument12 = true;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[6.35085648319999e+307] = 1.1928581845359937e+308
return a*b*c+d
};
var base_0 = [82,"e",25,82,783,"n",")",122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,"e",25,82,783,"n",")",122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,"e",25,82,783,"n",")",122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,"e",25,82,783,"n",")",122]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test369.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)