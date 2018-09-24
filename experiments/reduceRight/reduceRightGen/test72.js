





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = null
argument3[4] = {"157":"","783":100,"893":"ky","1.3051911065337273e+308":126,"5.684468264021386e+307":"","B":122,"":9.981122214369923e+307,"L":2.7292855913263713e+307,"$m":"Q","`r8[B":"Xh"}
base_0[0] = ""
return a+b-c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = null
return a/b*c/d
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = 1.5051495351808718e+308
base_2[8] = null
argument7[1] = [157,0,5e-324,0,403,714]
return a*b+c-d
};
var argument8 = {"618":618,"":""};
var argument9 = true;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = ["j-#E",823,"q","D","`_",705,783,705,-1]
base_3[0][0] = {"969":122,"":"","s":"4","zy(":1.3853159234701984e+308,"Yq{":25}
return a-b+c/d
};
var base_0 = ["K#",893,"8","J7-","(o","s",705,607,893,"Hsf$p"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K#",893,"8","J7-","(o","s",705,607,893,"Hsf$p"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K#",893,"8","J7-","(o","s",705,607,893,"Hsf$p"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["K#",893,"8","J7-","(o","s",705,607,893,"Hsf$p"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test72.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)