





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = ""
base_0[9] = true
base_0[3][4] = "+"
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][3] = "oO"
argument3 = [823,100,82]
return a/b/c
};
var argument3 = r_1;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = ["]ca5e",-100,82,823,783,"e "]
argument5[9.869573703797622e+307] = null
argument6 = 1.7561811752506442e+308
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1.4677087964888306e+308] = {"1.447416171140781e+308":893,"3.3866487818430455e+307":"","":"6!_","1.0993135770001866e+307":705,"1.4023345894785923e+308":"&| )y","1.096107689602873e+308":1.24812502260948e+308,"8.19761851403507e+307":"$<1QAb@","4.0333564180549685e+307":1.8209314212952013e+307,"n-Z":5.873342673359942e+307,"!":1.6905601155778604e+308}
argument7 = null
argument6[893] = 595
return a-b*c
};
var argument6 = false;
var argument7 = true;
var base_0 = ["Nm;","[V",157,969,"-[J_W",893,157,607,"-"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Nm;","[V",157,969,"-[J_W",893,157,607,"-"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Nm;","[V",157,969,"-[J_W",893,157,607,"-"]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test434.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)