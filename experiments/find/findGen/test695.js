





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = null
base_0[0][1] = false
return a-b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1] = [969,823,618,783,618,59,893,893,213]
argument5['^h'] = "P-"
return a/b*c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][1] = {"3":"","595":"","893":607,"":1.0281121129071876e+308,"1.048527567888538e+308":"5q7","1.0174479986837876e+308":"","-100":213,"7.750119729774558e+307":969,"7.399082916550717e+307":59}
base_2[5] = 3.2660033301628636e+307
return a+b+c
};
var argument6 = "'";
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[25] = {"122":"","3.6971786635670633e+307":"V","1.2981073919368828e+306":-100,"":"F","1.4644859951174586e+308":-100}
argument10[969] = [595,126,893,-100,595]
return a/b/c
};
var argument9 = true;
var base_0 = [893,783,714,655]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,783,714,655]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,783,714,655]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,783,714,655]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test695.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)