





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = 8.271752805111358e+307
base_0[2] = 7.351086910417618e+307
return a/b*c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['v'] = {"0":122,"607":"8","LZ":"","5e-324":82,"":"","1.7976931348623157e+308":59}
base_1 = ""
return a-b+c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['v'] = ["8","9","*8","=","f"]
return a-b*c/d
};
var argument4 = r_1;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[9.624051682326797e+306] = [783,655,893,-100]
argument6['F2nCX>6'] = 1.0006423352315662e+308
argument7['UU'] = false
return a-b*c*d
};
var base_0 = ["}",1.7976931348623157e+308,"fnv","I","q3H[","Xi","8l","1>Gb",460,-100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["}",1.7976931348623157e+308,"fnv","I","q3H[","Xi","8l","1>Gb",460,-100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["}",1.7976931348623157e+308,"fnv","I","q3H[","Xi","8l","1>Gb",460,-100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["}",1.7976931348623157e+308,"fnv","I","q3H[","Xi","8l","1>Gb",460,-100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test993.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)