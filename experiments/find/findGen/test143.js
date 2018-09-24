





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a*b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = {"25":6.237014285800856e+304,"@":59,"1.1756260384542968e+308":-100}
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = {"`":"","8.532184654364648e+307":"+","8.720403149100709e+307":1.6924573318225972e+308,"H&$J":"Ezdx","1.7976931348623157e+308":"ueSF","Eo":1.318965858079362e+308,"":"","1.6850136759409829e+308":595,"1.414685441765767e+308":655}
argument6['AO?'] = true
argument5[6] = {"122":"?","1.6178547935648004e+308":"t<","":"","1.0199452216939506e+308":-100,"9.391793843220336e+307":"U6"}
return a+b-c
};
var argument5 = {"6":893,"595":893,"":783,"Q":1.504355873316396e+308,"1.9469066781251785e+307":"e","a":"6##s8"};
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = null
base_3[0][6] = 1.573762566060491e+307
argument9[3] = null
return a+b+c
};
var base_0 = [100,"}","3",213]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"}","3",213]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"}","3",213]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,"}","3",213]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test143.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)