





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"823":1.7976931348623157e+308,"-100":-1,"4.64050675670809e+307":4.06088658122989e+307,"":783,"I":1.7842289659276945e+308,"E":"","2.000338444168762e+307":"|9","1.6146431732832684e+308":"c","b@J":4.733613093547207e+307,"7.945608068006051e+307":1.7008978731861901e+308}
base_0[2] = 1.0129927050429421e+308
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.3599216339661573e+308] = [618,783,618,59,893,893,213,823,122]
base_1[3] = true
return a-b*c
};
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = {"3":"","595":"","893":607,"":1.0281121129071876e+308,"1.048527567888538e+308":"5q7","1.0174479986837876e+308":"","-100":213,"7.750119729774558e+307":969,"7.399082916550717e+307":59}
base_2[3] = 3.2660033301628636e+307
return a+b+c
};
var argument5 = "'";
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = {"122":"","3.6971786635670633e+307":"V","1.2981073919368828e+306":-100,"":"F","1.4644859951174586e+308":-100}
argument9[122] = [595,126,893,-100,595]
return a/b/c
};
var argument8 = r_0;
var base_0 = [59,823,0,49,705,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,823,0,49,705,969]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,823,0,49,705,969]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,823,0,49,705,969]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test707.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)