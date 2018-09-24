





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.748669805137695e+307] = [403,122]
base_0[2] = {"25":843,"W-i":1.004420370804022e+308,"Bf,":49,"s|":3.992219666863813e+307,"":49}
base_0[8] = {}
return a+b/c
};
var argument2 = "7Q";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = ["J"]
return a*b*c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['!j'] = ["G","C[",627,"nx","N",1.7976931348623157e+308]
base_2[1][0] = true
argument6[1] = null
return a+b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = "("
base_3[6] = [49,122,0,"T",618]
argument8['AO?'] = null
return a/b-c
};
var argument7 = true;
var argument8 = r_0;
var base_0 = ["LTEN7","r","s1wN","?","a","3",":iY ","Tr",";k","Om"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["LTEN7","r","s1wN","?","a","3",":iY ","Tr",";k","Om"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["LTEN7","r","s1wN","?","a","3",":iY ","Tr",";k","Om"]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["LTEN7","r","s1wN","?","a","3",":iY ","Tr",";k","Om"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test64.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)