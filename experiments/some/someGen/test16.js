





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = false
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = {"403":"","714":"Uo","1.4845944537034098e+308":"0q","1.4127682444287207e+308":"","9.64729308697182e+307":"","WV":126,"'`$":705}
argument4 = ["D","k"]
base_1[1] = "4w"
return a+b*c
};
var argument3 = {"403":1.7976931348623157e+308,"":595,"1.1695698080085264e+308":607};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = ["@"]
base_2[2] = null
return a/b+c
};
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = {}
argument8[1.6798476101238045e+308] = null
return a/b/c
};
var argument8 = {":W@":"q","5.554138396772893e+307":"e","-1":1.5622252270206825e+308,"1.2472594883700362e+308":627,"":"","1C":783};
var argument9 = true;
var base_0 = [100,-100,82,-100,126,59,843,126,82]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,-100,82,-100,126,59,843,126,82]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,-100,82,-100,126,59,843,126,82]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,-100,82,-100,126,59,843,126,82]
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
require("fs").writeFileSync("./experiments/some/someGen/test16.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)