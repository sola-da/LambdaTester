





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = [0,122,460,100,122]
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2.249941463060761e+307] = {"":618,"1.3135381389486989e+308":"","Z@-Zw":"","1.5240690061193233e+306":49,"{a":"o","-1":49}
base_1[2][5e-324] = false
base_1[5] = {"705":122,"e":6.359352004902689e+307,"":"","a":"","1.105334022553788e+308":1.2278037320713883e+307,"%3":100,"6.441363258043442e+307":")","x":"","9.858671748952484e+307":"","fK":1.7731800524018398e+308}
return a-b*c
};
var argument3 = false;
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = 823
base_2['length'] = false
return a-b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['f!BO'] = null
return a-b-c
};
var base_0 = [705,-100,607,460,242,"P"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,-100,607,460,242,"P"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,-100,607,460,242,"P"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,-100,607,460,242,"P"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test143.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)