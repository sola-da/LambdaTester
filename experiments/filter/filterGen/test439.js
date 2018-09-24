





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = ""
argument2[3] = true
argument3[4] = "+"
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = "oO"
argument3 = [823,100,82]
return a/b/c
};
var argument3 = r_1;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = ["]ca5e",-100,82,823,783,"e "]
argument6[1.4034744228995816e+308] = null
base_2[0] = 1.7561811752506442e+308
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.0481490052276395e+306] = {"1.447416171140781e+308":893,"3.3866487818430455e+307":"","":"6!_","1.0993135770001866e+307":705,"1.4023345894785923e+308":"&| )y","1.096107689602873e+308":1.24812502260948e+308,"8.19761851403507e+307":"$<1QAb@","4.0333564180549685e+307":1.8209314212952013e+307,"n-Z":5.873342673359942e+307,"!":1.6905601155778604e+308}
base_3[0] = null
argument6['wIs'] = 595
return a-b*c
};
var argument6 = false;
var argument7 = true;
var base_0 = ["Nm;","[V",157,969,"-[J_W",893,157,607,"-"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Nm;","[V",157,969,"-[J_W",893,157,607,"-"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Nm;","[V",157,969,"-[J_W",893,157,607,"-"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Nm;","[V",157,969,"-[J_W",893,157,607,"-"]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test439.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)