





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = ""
return a+b/c+d
};
var argument2 = "^";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = ""
argument6[126] = ""
return a+b-c-d
};
var argument5 = null;
var argument6 = "tJ";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['!j'] = "rT("
return a/b-c/d
};
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6][2] = {"1.97100031301767e+305":"","?h":705}
argument11 = true
return a-b*c/d
};
var argument10 = null;
var argument11 = false;
var base_0 = [0,49]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,49]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,49]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,49]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test484.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)