





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.399309004356655e+308] = 1.6745404229583213e+307
base_0[3][1.7261030733891165e+308] = null
return a+b-c
};
var argument2 = {"4":6.053231096040808e+307,"6":3.228501890899884e+307,"122":1.305095612527713e+307,"213":"R","783":1.3078592485129926e+308,"7.82874486699946e+307":"","b":843,"":1.3141052446997098e+308,";(":"","vd":"AyA"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"":6.061805781353472e+307,"4.1660335719982363e+307":4.4373914416799297e+307}
return a*b*c
};
var argument4 = false;
var argument5 = 1.557411157318421e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = "$E"
argument8[6] = ""
argument7[242] = 1.1702725538322682e+308
return a-b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[969] = null
argument8[6] = [213,122,25,893,618,242,0,655,82]
argument9[100] = ["^","FRg8","U68","9","iKA{e","6"]
return a-b*c
};
var argument8 = 1.525442581880518e+308;
var base_0 = [0,126,627,100,213,893,843,82]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,126,627,100,213,893,843,82]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,126,627,100,213,893,843,82]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,126,627,100,213,893,843,82]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test765.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)