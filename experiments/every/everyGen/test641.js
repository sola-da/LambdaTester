





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = ["F","=bN","c","J"]
base_0[0][6] = 1.7489871807508479e+308
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4.960033715165713e+307] = null
argument4[5] = [82,213,157,783,49,"h",242,1.7976931348623157e+308,"t","AB"]
argument3[4.960033715165713e+307] = ["w","Lx`z","mT"]
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[122] = false
return a-b-c
};
var argument4 = r_0;
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = "3"
argument8[122] = {"59":"","893":"g!","":">f","3.268512482387841e+307":1.1158545042091157e+308,"'6":",j!","G":1.4134104519965591e+308}
argument8[122] = null
return a/b+c
};
var argument7 = [">l","e","Pm","u=_,","o","]","!O6"];
var argument8 = {"49":"","":"Q","D#":969,"5.860442007695845e+307":"1"};
var base_0 = ["J","Mg"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["J","Mg"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J","Mg"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J","Mg"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test641.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)