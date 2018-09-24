





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[7.999889602676851e+307] = {"655":"","823":100,"Ti":3.2812886180558397e+307,"":"","bWsu9i":618,"9.33871826860842e+306":1.2873723994690128e+308}
return a+b*c*d
};
var argument2 = false;
var argument3 = true;
var argument4 = true;
var argument5 = {"0":"Yo!","100":"","893":627,"ID[":"","Y":"!","8.021484351244928e+307":""};
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = {"403":1.6901137084971617e+308,"460":893,"1.5609081524852243e+308":"","Y":"Tp[I","":1.3188832684046416e+308,"E":"",";wHyO":"}d","1.0807052997680013e+308":""}
argument5[';N'] = {"100":-1,"460":8.680323561930034e+307,"595":"","":"","1.604400963748688e+308":126,"-1":0}
return a+b/c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = {"59":"<19","82":1.5946340006841344e+308,"655":"u","1.1919288586506784e+308":"","":1.7976931348623157e+308}
base_2[6] = false
argument10[1] = false
return a*b/c-d
};
var argument9 = null;
var argument10 = true;
var argument11 = r_3;
var argument12 = true;
var argument13 = null;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13['18{'] = 5.575622261650437e+307
base_3[0][0] = {"1":"^","8.249035843890683e+307":-1,"":1.3051846352857893e+308,"PM":403}
return a/b/c-d
};
var base_0 = [595,157,893,126,655,627,655,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,157,893,126,655,627,655,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,157,893,126,655,627,655,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,157,893,126,655,627,655,82]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test930.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)