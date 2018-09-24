





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3] = true
base_0['length'] = "$HZ"
base_0[3][1] = true
return a*b-c/d
};
var argument5 = 1.5492436168096198e+308;
var argument6 = r_1;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = 3.3398207908222274e+307
return a+b*c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['s'] = "QO"
return a+b/c*d
};
var argument10 = r_1;
var argument11 = {"126":1.3527185474587023e+308,"783":100,"":5.13252659980399e+307,"6.217022938630868e+307":1.1903922856659861e+308,"C;Zrp":6.282569503636955e+307,"$o@":157,"1.1838846715913196e+308":49,"1.7585945816598359e+308":1.6037871967761225e+308,"-100":1.6203141258544653e+308};
var argument12 = r_2;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[595] = false
return a*b-c/d
};
var base_0 = [0,242,627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,242,627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,242,627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,242,627]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test636.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)