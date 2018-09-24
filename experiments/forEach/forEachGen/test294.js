





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9] = "m"
base_0[0][1] = "K"
return a/b+c
};
var argument2 = 1.5294942358426839e+308;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7.92397107964922e+307] = ""
argument5[8.748669805137695e+307] = ""
argument4[2] = {"607":100,"893":5.217165744370757e+307,"":1.0456506386145557e+307,"1.2385300815981474e+308":8.862574381000535e+307,"qazM":"Tcy?5^","l":25,"*d`":49,"5.005620889174981e+306":"","1.4002435000896954e+308":-1}
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = null
argument6 = {"E0L":893,"7M0&&Ll":"","1.0029820620019752e+308":1.1747174708047707e+308}
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = true
argument7[2] = ""
return a/b+c
};
var argument7 = [714,"%","aY","r",714,783,607,"#ue","A","ni;{"];
var base_0 = [">","v8|","y","8","R","x"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">","v8|","y","8","R","x"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [">","v8|","y","8","R","x"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [">","v8|","y","8","R","x"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test294.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)