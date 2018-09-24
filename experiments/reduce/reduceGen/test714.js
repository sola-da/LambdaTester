





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = {"1[":3.8944269958790873e+307,"4.086659010751757e+307":893,"1.7800060110835846e+308":""}
argument2 = [59,705,126,126,893,783]
argument2[3] = "Vz"
return a-b-c+d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = null
return a*b/c-d
};
var argument4 = false;
var argument5 = true;
var argument6 = {"655":1.5125572232289595e+308,"9.090103295122995e+307":"","7.962939126451387e+307":1.3376560428504433e+308,"1.7909913073671624e+308":1.5823749896730273e+308,"8.328829717023045e+307":"*_n"};
var argument7 = {"0":82,"59":1.3122648183075263e+308,"705":1.7976931348623157e+308,"969":49,"":1.221700182574524e+308,"1.5564338992922785e+308":"&+Q1NJ ","n":969};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[25] = 9.044044687622406e+307
argument7[1.3938918493123786e+308] = null
return a+b/c+d
};
var argument9 = r_2;
var argument10 = r_3;
var argument11 = 1.7284993009372918e+308;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = 242
return a+b-c*d
};
var base_0 = [25,"*",705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,"*",705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,"*",705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,"*",705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test714.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)