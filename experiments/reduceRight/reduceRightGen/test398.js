





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[126] = false
argument3[7] = true
argument2['L'] = "l"
return a+b/c-d
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = ""
return a-b*c*d
};
var argument5 = 1.7733320784999906e+308;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = null
argument8[126] = ""
return a*b/c/d
};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['{S'] = null
return a/b*c*d
};
var argument9 = true;
var base_0 = [242]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test398.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)