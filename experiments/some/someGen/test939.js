





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = true
argument1[1] = {"714":"","Zk":3.605373217188776e+306,"1.533524735246e+308":607,"G":1.7026953276819402e+307,"1.8236967910625075e+307":""}
argument2['f!BO'] = {"ad-":"C","1.1175618298511997e+308":1.7664131137327435e+308}
return a*b/c
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['V'] = null
argument6[4] = [-1,607]
base_1[1] = 783
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 1.1240724261264444e+308
argument6[1.6798476101238045e+308] = null
argument6[1] = ""
return a*b*c
};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.6798476101238045e+308] = {"100":"+)f","1.1281954060689235e+308":"","B":1.0731403631102318e+307}
base_3[2] = ""
argument7 = ""
return a*b/c
};
var base_0 = ["e","G","Uf<=","+!&","+","v>","d!9L","=A","B"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e","G","Uf<=","+!&","+","v>","d!9L","=A","B"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e","G","Uf<=","+!&","+","v>","d!9L","=A","B"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e","G","Uf<=","+!&","+","v>","d!9L","=A","B"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test939.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)