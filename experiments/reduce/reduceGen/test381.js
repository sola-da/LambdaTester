





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = {"49":"","1.3001893428552316e+308":3.5782968535084766e+307,"":"6!_","1.0993135770001866e+307":705,"1.4023345894785923e+308":"&| )y","1.096107689602873e+308":1.24812502260948e+308,"8.19761851403507e+307":"$<1QAb@","4.0333564180549685e+307":1.8209314212952013e+307,"n-Z":5.873342673359942e+307};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[';N'] = {"705":4.1458518914803835e+307,"":"OJ"}
base_0[4] = [157,"k","=",242,213,82,"3 x"]
argument3[627] = "&"
return a-b+c/d
};
var argument5 = 8.607422244466167e+307;
var argument6 = ["A","X","nWc","!j","P"];
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = ["E-?j*4`","U"]
argument6[3] = 5.404806722013628e+307
argument7[0] = ""
return a+b/c/d
};
var argument9 = null;
var argument10 = null;
var argument11 = [705,783,893,627,59,-100];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['*c'] = 4.799138908015089e+307
argument10 = [843,"n",0,"]","O",705,"tc",969]
return a/b-c+d
};
var argument13 = false;
var argument14 = r_2;
var argument15 = r_3;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = -100
argument15[403] = {"0":1.7976931348623157e+308,"59":"C","969":"","":""}
argument14[7.463432409233234e+307] = "R"
return a-b+c*d
};
var base_0 = ["4h"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4h"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4h"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["4h"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test381.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)