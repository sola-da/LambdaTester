





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1207829086460726e+308] = ["F","=bN","c","J"]
argument3[-1] = 1.7489871807508479e+308
return a/b-c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[627] = 25
argument5[1.738403780925446e+308] = 4.975377555350988e+307
base_1[1][2] = null
return a-b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = {"607":1.5523117894747937e+308,":^":1.7976931348623157e+308,"4.731337868115702e+307":3.566730758114075e+307,"x`z":783,"":1.055333849572641e+308}
return a*b+c-d
};
var argument6 = r_1;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = {"1.7826867761797066e+308":213}
argument10['T'] = "3"
argument9[3.8120440085202614e+307] = {"59":"","893":"g!","":">f","3.268512482387841e+307":1.1158545042091157e+308,"'6":",j!","G":1.4134104519965591e+308}
return a-b*c+d
};
var argument9 = null;
var base_0 = [893,25,595,595,49]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,25,595,595,49]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,25,595,595,49]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,25,595,595,49]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test637.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)