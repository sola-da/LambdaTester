





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = ""
argument2 = {"3":242,"627":1.430210723825207e+307,"":"","1.7005920468361932e+308":"LK","j":"","4.741612959078663e+307":1.1827490542793048e+306,"-1":2.5592831561482645e+307,";":1.6088310332528071e+308}
return a+b*c
};
var argument2 = 1.4078978196353931e+308;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][1] = "Pb"
return a/b+c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = [49,5e-324,242]
base_2[1][2] = {"403":"","893":618,"":"",";":"","1.3222620688117873e+308":9.093319114657293e+307,"-100":403,"7.441143278029241e+307":1.4102481671254955e+308,"G":""}
return a/b*c
};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.0481490052276395e+306] = {"705":"jB","z}":"u","Wh`":1.129287391905667e+308,"1.0124182806331064e+308":"-@","1.1777561018768243e+308":" #","b":"<Gd","":1.7722917579249007e+308,"c;":5.692616949174869e+307}
argument8[6] = {"126":""}
argument8['wIs'] = {"1.8700611047696698e+307":""}
return a/b/c
};
var argument8 = "m-";
var argument9 = [618,460,893,655,157];
var base_0 = ["|=","7","a","-","q"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|=","7","a","-","q"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test432.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)