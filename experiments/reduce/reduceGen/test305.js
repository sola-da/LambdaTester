





var callbackArguments = [];
var argument1 = "^";
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[595] = {"714":"R","dd*$<":126,"JtF":9.68403533937301e+307,"":"0","1.2028188195061072e+308":1.482921662790223e+308}
return a/b/c+d
};
var argument5 = null;
var argument6 = 9.361743927709468e+307;
var argument7 = "Dw";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[82] = ""
argument6[403] = true
return a/b*c*d
};
var argument9 = r_1;
var argument10 = null;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1] = "T"
return a*b-c+d
};
var argument13 = r_1;
var argument14 = r_1;
var argument15 = [0,100,705,969,-1,618,823];
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][9.12287810829114e+307] = false
return a*b*c+d
};
var base_0 = [122,1.7976931348623157e+308,1.7976931348623157e+308,627,-100,59,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,1.7976931348623157e+308,1.7976931348623157e+308,627,-100,59,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,1.7976931348623157e+308,1.7976931348623157e+308,627,-100,59,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,1.7976931348623157e+308,1.7976931348623157e+308,627,-100,59,705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test305.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)