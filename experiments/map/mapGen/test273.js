





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = [122,0,607,893,595,627,893,-100,242,893]
argument3[3] = 1.008332735906437e+308
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = 403
argument3[5] = null
return a/b/c
};
var argument3 = ["n",157,"+",595,"?x",25,705];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = false
base_2[1] = 1.544762535422358e+308
return a-b/c
};
var argument5 = r_0;
var argument6 = {"49":1.5784028129598612e+308,"823":"yTFIP!h","Q":8.615285127269232e+307,"dD":"","":"","K":213,"ehX":"d","G":"","1.1074254225837321e+307":"#r","1.041806788712079e+308":100};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = ["Cr(",213,"VDtp",49,"hq-",126,"Y",100,"QFmv","4"]
argument9[607] = "c)"
argument9[157] = null
return a-b+c
};
var argument8 = false;
var argument9 = {"122":59,"618":"9","627":2.3708334006254355e+307,"705":"]","714":"M","":"","3Tpj5":0};
var base_0 = ["A","qMRZ^U"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["A","qMRZ^U"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["A","qMRZ^U"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test273.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)