





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = 1.4871315975577496e+308
argument2[4] = "gd"
argument2[8.575765443877852e+307] = ""
return a-b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = [783,82,-100,403,-1,714,25,-100,0]
argument4[4] = 783
return a/b+c-d
};
var argument3 = ["s","k"];
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = null
base_2[4] = 9.372235916658854e+307
return a+b+c+d
};
var argument6 = "v";
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = {"126":"2yMIJ","":"x","1.2184015760594246e+308":"","1.5489527159070423e+308":1.0121138003167645e+308,"tj!Ce_#O48":157,"6.87808394136586e+307":1.08644665731669e+308,"1.3395963760473447e+307":607,"]":"=cvP"}
argument10[655] = [82,-100,655,893,460]
return a*b/c/d
};
var argument9 = null;
var argument10 = false;
var base_0 = [969,"c<","[",655]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,"c<","[",655]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,"c<","[",655]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,"c<","[",655]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test505.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)