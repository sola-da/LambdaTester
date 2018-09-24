





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['j'] = {"59":"k-","122":"","242":" $Y","RQ":"","1.2235938538787072e+308":126,"":"4m",">":59,"3.156904780713914e+305":6.21217030568762e+307,"9.417485144865296e+307":5.784851784880739e+307}
return a/b/c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = "A{"
argument4[4] = ""
argument5['_W'] = null
return a/b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[705] = {"126":5.886953368939646e+307,"823":7.477669602007243e+306,"":1.2675363159302145e+308,"3.4170635696140196e+307":"j","1!":"","(yG":705}
argument8['^h'] = [843,"u","wd",-100,"UD$","4"]
argument8[1.0727847755854773e+308] = ["V0","@Lr<","[","_n","27","3","!M7","}","yc","N"]
return a+b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = null
return a+b*c
};
var argument8 = {"607":"HgQZ","":5.382803691128094e+307,"v ":"8+","4.4307717853702085e+307":242};
var base_0 = ["%n","6nPsY","ND","Z","4","="]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%n","6nPsY","ND","Z","4","="]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%n","6nPsY","ND","Z","4","="]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%n","6nPsY","ND","Z","4","="]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test662.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)