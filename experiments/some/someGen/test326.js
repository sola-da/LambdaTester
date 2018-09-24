





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = null
base_0[1] = 460
argument2[1] = 705
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"823":618,"969":"V+zH)","tHZ":"","ee":2.0481494675525847e+307,"XQ":"","t":"I"}
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = ["D_$(","t","a*","i+b#",")f","["]
base_2[1]['{X'] = {"82":"2","213":893,"403":"mZ","714":"","893":618,"7.990209621568258e+307":157,"8.04990310495041e+307":-1,"":"","p":"D","d8":1.6810557110905536e+308}
return a/b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = 1.6309607983176634e+308
return a-b-c
};
var argument5 = null;
var base_0 = [";","Zs","!",")M$v","q8","{Z"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";","Zs","!",")M$v","q8","{Z"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";","Zs","!",")M$v","q8","{Z"]
var r_2= undefined
try {
r_2 = base_2.some(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";","Zs","!",")M$v","q8","{Z"]
var r_3= undefined
try {
r_3 = base_3.some(argument4,argument5)
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
require("fs").writeFileSync("./experiments/some/someGen/test326.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)