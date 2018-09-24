





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[714] = 627
argument2 = [1.7976931348623157e+308,969,969,714,893,655]
argument1[3.377960715099946e+307] = null
return a-b-c
};
var argument2 = [843,-100,403,5e-324,0,823,157,460,213];
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][2] = null
argument4[3.377960715099946e+307] = false
argument5['C'] = "#Q"
return a+b*c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8][3] = {"403":8.989284704367846e+305,"460":"","Wu":"Y0qj","":"","1.5816034487453778e+308":843,"1.1438530166427232e+308":82,"6.050808402076015e+307":"t","x":""}
argument7[0] = 126
argument7[157] = {"714":""}
return a*b*c
};
var argument7 = [655];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = null
return a/b-c
};
var argument9 = r_0;
var argument10 = null;
var base_0 = ["t^","C","17k","k","O","65","`&pI%xK"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t^","C","17k","k","O","65","`&pI%xK"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t^","C","17k","k","O","65","`&pI%xK"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test325.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)