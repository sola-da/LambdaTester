





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = null
base_0[7] = 1.7976931348623157e+308
argument3[403] = "Za"
return a*b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = {"":714,"1.078846695117171e+308":"","3.206411351049406e+307":"","&":""}
return a+b-c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 7.698953074951073e+307
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[242] = {"655":3.919320146670121e+307,"783":"","w":"","":"J",">i":"","7.52031342535313e+307":"h","1.6580724752728375e+308":"","6.970434246962268e+307":1.7527746114832782e+308,"Ka":-100,")":""}
argument7[6] = ["YU_","ZoFl"]
argument7[25] = false
return a*b/c
};
var argument7 = ["8",783,460,157];
var argument8 = false;
var base_0 = ["V",":","l","M%M","&","U98B","(UIw","F","kO","d"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V",":","l","M%M","&","U98B","(UIw","F","kO","d"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V",":","l","M%M","&","U98B","(UIw","F","kO","d"]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V",":","l","M%M","&","U98B","(UIw","F","kO","d"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test681.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)