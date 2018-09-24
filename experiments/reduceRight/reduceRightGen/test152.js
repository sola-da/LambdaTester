





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = false
argument1 = {"59":6.923969571411667e+307,"V":5.421154228764741e+307,"9.646628935437803e+307":"","":9.391793843220336e+307,"3?":1.0199452216939506e+308,"-100":"","6.630074096917343e+307":"","U6":1.1474307925861408e+308}
return a+b/c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = null
argument4['8('] = ["Ne","M"]
argument3[8.575765443877852e+307] = ["X","a6","KGO(","8"]
return a*b*c*d
};
var argument3 = "";
var argument4 = r_0;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = [893,823]
base_2[3] = [403,"O",25]
return a/b+c-d
};
var argument6 = ["kyOh","M","I{sW","$","{k",823,"wKs","_]","|"];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['w'] = {"0":"","242":"<","460":655,"627":"QB","705":0,"":"","W":49}
base_3 = false
base_3[6] = null
return a+b/c*d
};
var argument8 = false;
var argument9 = true;
var base_0 = [":","eSF","L*","f#I1"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":","eSF","L*","f#I1"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":","eSF","L*","f#I1"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":","eSF","L*","f#I1"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test152.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)