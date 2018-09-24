





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = ""
argument2[4] = {"49":1.6103665787765955e+308,"843":9.029776082761639e+307,"9.400181569736919e+307":">XHm1","1.0149538323736175e+308":-100,"":"","1.243446698529588e+308":4.456251793057931e+307}
argument3[157] = true
return a*b/c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = ""
return a/b*c
};
var argument4 = {"3":1.1465490919089324e+308,"2.320353221901601e+307":-1};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = 893
return a+b*c
};
var argument6 = {"213":7.034215566731081e+307,"":1.0555583009664232e+307,"-":"w^","1.6122823333188358e+308":"g","K":"","q":"","%":1.6032298315810952e+308};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[893] = {"1.0761710453918136e+308":969,"wIs":783,"":1.2908849489421809e+308,"(q]:":"","-Dv^":"","1.2390797318031166e+308":"A"}
base_3 = null
argument7 = {"-100":5.764676469220162e+307,"1.7640162818396927e+308":-100}
return a*b/c
};
var argument8 = false;
var argument9 = 122;
var base_0 = [893,607,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,607,893]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test194.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)