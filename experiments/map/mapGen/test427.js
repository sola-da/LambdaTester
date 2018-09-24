





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1] = 1.0188582655419394e+308
argument2[49] = false
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = {"403":"HW","460":655,"714":"","823":"","843":"w7","893":"","":"ki","1.591187912177783e+308":"","5.373305087884918e+307":"","1.207708983225878e+308":""}
return a+b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][5] = {"242":"j","627":49,"843":1.7005920468361932e+308,"969":"3","":627,"LK":627,"1.1827490542793048e+306":-1,"2.5592831561482645e+307":"","1.430210723825207e+307":";"}
argument5['T'] = [-100,893,213,460,5e-324,82,893,59,618]
base_2[0][1.4677087964888306e+308] = 843
return a-b+c
};
var argument4 = null;
var argument5 = 1.244078254734585e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['f'] = [25,893,49,5e-324,242,403]
base_3[3][2] = {"403":"","893":618,"":"",";":"","1.3222620688117873e+308":9.093319114657293e+307,"-100":403,"7.441143278029241e+307":1.4102481671254955e+308,"G":""}
base_3[2] = [893,607]
return a-b-c
};
var base_0 = ["Z"," d","m","b","y","4"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Z"," d","m","b","y","4"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Z"," d","m","b","y","4"]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test427.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)