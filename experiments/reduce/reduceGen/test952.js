





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = null
argument3[2] = null
argument2[6] = true
return a-b*c/d
};
var argument2 = false;
var argument3 = true;
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['Cb'] = {"783":1.5960513633426478e+308,"":8.264130064760569e+307,"6.35248965107414e+307":"","1.825257160328019e+307":1.2983881956352083e+308,"7.918366569180473e+307":1.6432470033020746e+308,"6.906297548534086e+307":"U"}
return a-b*c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = null
argument7[5.71178064163152e+307] = {"242":627,"783":8.624078403639412e+307,"":49,"G":1.4112481214301397e+308,"HC":122,"1.1231789842254062e+305":"ySIO&"}
return a+b/c/d
};
var argument7 = null;
var argument8 = null;
var argument9 = null;
var argument10 = r_2;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = true
argument8[2.1869172855352885e+307] = null
return a*b*c-d
};
var base_0 = [607,126,627,242,714,893,823,213,59,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,126,627,242,714,893,823,213,59,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,126,627,242,714,893,823,213,59,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,126,627,242,714,893,823,213,59,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test952.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)