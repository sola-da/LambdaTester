





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['PK4'] = ""
argument3[-1] = null
base_0[3] = null
return a*b*c*d
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[783] = 82
return a*b+c*d
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = true
argument9[8] = 6.042663415266075e+307
return a+b/c*d
};
var argument8 = null;
var argument9 = {};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[100] = ";"
argument11 = [460,"tM",-100]
return a/b*c+d
};
var base_0 = ["3","bp","h","`W&"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3","bp","h","`W&"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3","bp","h","`W&"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3","bp","h","`W&"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test870.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)