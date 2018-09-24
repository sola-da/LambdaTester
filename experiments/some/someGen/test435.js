





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[157] = ""
argument2 = {"3":242,"627":1.430210723825207e+307,"":"","1.7005920468361932e+308":"LK","j":"","4.741612959078663e+307":1.1827490542793048e+306,"-1":2.5592831561482645e+307,";":1.6088310332528071e+308}
return a+b*c
};
var argument2 = 1.4078978196353931e+308;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.6798476101238045e+308] = "Pb"
return a/b+c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = [49,5e-324,242]
argument5[0] = {"403":"","843":1.6104452951808922e+308,"893":618,";":"","1.3222620688117873e+308":9.093319114657293e+307,"":"a","-100":403,"7.441143278029241e+307":1.4102481671254955e+308,"G":""}
base_2[1][0] = [705]
return a/b*c
};
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['f!BO'] = ""
argument8[618] = false
return a+b*c
};
var argument8 = {"595":126,"1.5101735367945765e+308":1.7976931348623157e+308,"@":1.1777561018768243e+308," #":"b","<Gd":""};
var argument9 = ["c;","j","iAq","t","6",",","-","_","a","+g"];
var base_0 = ["|=","7","a","-","q"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|=","7","a","-","q"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|=","7","a","-","q"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|=","7","a","-","q"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test435.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)