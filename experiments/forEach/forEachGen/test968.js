





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.639664788900972e+307] = -1
argument1['VsR'] = ""
argument2[1.7394185942769049e+308] = "`"
return a*b/c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = null
return a-b*c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[460][1.2658989034477382e+308] = true
base_2[3][0] = ["#,","Po",122,"cO5","1P","$",25]
base_2[3] = null
return a+b*c
};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['j2t'] = [655,705,705,893,-1,893,122,100,403,126]
return a+b-c
};
var argument9 = null;
var argument10 = {"460":1.5983329585705796e+308,"705":-100,"7.773358433149735e+307":"@","":"","#mgR":"8O","G":3.337577694376711e+307,"7.020831392637673e+307":"i"};
var base_0 = [655,627,1.7976931348623157e+308,213,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,627,1.7976931348623157e+308,213,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,627,1.7976931348623157e+308,213,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,627,1.7976931348623157e+308,213,607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test968.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)