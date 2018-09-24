





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = 627
base_0[1][0] = {"25":1.6856339281610902e+308,"59":6.052477349827236e+307,"714":"","843":4.3614755335232507e+307,"":"","1.0481797599457545e+308":"","1.6211862347331925e+308":-1,"1.4205972444974577e+308":122,"V":59,"1.842833136430851e+306":607}
argument2[-1] = {"":"","1.6678554512317298e+308":"","B-":"","2.707059861566396e+307":1.7976931348623157e+308}
return a/b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.0500354979187844e+308] = true
argument4[1] = 893
return a-b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[627] = [49,705,969,627,126]
base_2[7] = "?"
argument5[3.7668525981726295e+307] = false
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.7668525981726295e+307] = true
return a-b*c
};
var argument6 = true;
var argument7 = null;
var base_0 = ["I;","+"," ","H"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I;","+"," ","H"]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I;","+"," ","H"]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["I;","+"," ","H"]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test68.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)