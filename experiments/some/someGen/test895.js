





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5e-324] = ["S",",=UJh;,4","X","8*","T","Vb","uK","c","TA"]
argument3[3] = null
base_0[3] = 5.535314169690854e+307
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['Y'] = {"823":""}
argument3[9] = {"403":9.6843039694463e+307,"460":"","":1.5451827461666457e+308,"5.407514876736117e+307":"X","1.2628617575839544e+308":1.1247838836265462e+308,"C":969,"5.323855876415418e+307":5.991310601202259e+307}
return a-b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = "|"
base_2[4] = null
argument4[618] = true
return a*b+c
};
var argument4 = null;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['5L'] = 460
return a/b/c
};
var argument7 = null;
var base_0 = ["Lt4t","{7","?","#c","9",",","&:L","Z1y"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Lt4t","{7","?","#c","9",",","&:L","Z1y"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Lt4t","{7","?","#c","9",",","&:L","Z1y"]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Lt4t","{7","?","#c","9",",","&:L","Z1y"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test895.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)