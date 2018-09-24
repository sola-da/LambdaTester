





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = {"126":49,"783":"kmy","":1.0776300321223067e+308,"#^P^":460,"J":893,"lJ":3.8931841117686357e+307,"NQ":"x|","2.6044512001023865e+307":"","-100":714,"5.380612713619898e+307":8.489439194107864e+307}
argument2[2] = null
return a-b/c/d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = ""
argument4[1] = {"0":"","705":4.0024022476900126e+307,"1.7303679783071533e+308":"1","4.902079856940853e+307":100,"3.433823272321781e+307":"U","j":1.480595568781008e+308,"1.622676074870939e+308":1.4772034231750266e+308}
argument5 = {"1.3881389821289625e+308":"17a","2.43570433740278e+307":"","":-100}
return a-b*c/d
};
var argument4 = false;
var argument5 = [126,618,213,607,403];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = "k^XSq<d*"
argument7['v'] = 1.772126923872973e+308
base_2 = 3.1852676653604263e+307
return a+b/c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['a'] = 7.082612054892378e+307
base_3[5] = null
return a+b/c-d
};
var argument8 = null;
var base_0 = [122,0,213,25,969,969,627,783,627,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,0,213,25,969,969,627,783,627,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,0,213,25,969,969,627,783,627,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,0,213,25,969,969,627,783,627,893]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test598.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)