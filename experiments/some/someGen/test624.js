





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = true
argument2['f9zgt4n!ZJR]W'] = true
return a-b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7.004668712060429e+307] = true
argument4[705] = [1.7976931348623157e+308,122,-1,403,82,"O",":","8nEx","&Y"]
base_1[3][3] = ""
return a-b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][3] = true
argument6[893] = {"0":1.1289653301431265e+308,"714":1.7959500000966516e+308,"1.2860986698411312e+308":823,"8.627728920272564e+306":"","":213,"e<)":969,"9.843237426656786e+307":"Q,","5.840733104108622e+307":"p"}
return a+b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = [655,823,627,969,242]
argument6['j'] = true
return a/b/c
};
var argument6 = true;
var base_0 = ["=9","@","zp||H","F","j","{*+","|","GO","=z:r"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=9","@","zp||H","F","j","{*+","|","GO","=z:r"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=9","@","zp||H","F","j","{*+","|","GO","=z:r"]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=9","@","zp||H","F","j","{*+","|","GO","=z:r"]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test624.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)