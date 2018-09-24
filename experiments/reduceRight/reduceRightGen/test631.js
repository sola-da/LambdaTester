





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][2.819898637310108e+307] = 1.1404176727275593e+308
return a/b/c*d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = null
argument4 = {"I":"83r"}
return a*b*c/d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = ""
base_2[1] = 59
return a/b/c-d
};
var argument6 = {"0":1.6936204008749117e+308,"242":1.7117468098776642e+308,"9u":"tHb","|Z":"G","7.686354561681368e+307":"Gg","5.938046894692883e+307":"H","1.768543153876968e+308":1.058629293008561e+308,"2.521221808635132e+307":"I","6.271272945778168e+307":""};
var argument7 = "";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[655] = {"":7.436263950318142e+307,"1.7011513183079956e+308":"6","J":5.135430180361987e+307,"6J":7.077016391802626e+307,"5.223540987078915e+307":"1n","6.755945195221693e+306":893}
argument9[3] = ""
argument9['a'] = true
return a-b-c-d
};
var base_0 = [843,783,403,242,5e-324,49,460]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,783,403,242,5e-324,49,460]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,783,403,242,5e-324,49,460]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,783,403,242,5e-324,49,460]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test631.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)