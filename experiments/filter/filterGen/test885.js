





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.0481490052276395e+306] = 893
argument2[5] = {"4.63860447797663e+307":"kNi8fg","6.676640481782357e+307":1.885372816516543e+307,"6.734345821156661e+307":4.728333616420509e+307,"":783}
return a*b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = ""
base_1[0] = [157,969,705,893]
base_1[1][1] = {"714":4.696677741551613e+307,"3.6023492927679204e+307":1.2368690426977826e+307,"4.2713399046136844e+307":"","":969}
return a-b*c
};
var argument4 = "$|";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = null
argument6[7.82874486699946e+307] = {"823":"","j":"4","":"p"}
argument5 = null
return a/b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = "Yl"
return a-b/c
};
var argument7 = {"{Uy":"*","9.866236195703158e+307":9.780920711798914e+307};
var argument8 = r_0;
var base_0 = ["+Z","v"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+Z","v"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+Z","v"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+Z","v"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test885.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)