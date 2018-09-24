





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = 4.895649342550644e+307
base_0[1]['['] = [783,714,460,618,-1,59,-100,618]
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][6] = true
return a-b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = 82
argument4['f-d'] = ""
return a+b+c
};
var argument4 = [1.7976931348623157e+308,49,607,49,823];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = {"0":"","82":9.711099717377696e+307,"{":618,"":"","8.981789316726321e+307":25,"'":7.20355792467902e+307,"1.805279024068277e+307":969,"8.741317717554023e+306":"x"}
argument7[4.953791384496108e+307] = [242,-1,-1]
return a/b+c
};
var argument6 = r_1;
var base_0 = [82,213,-1,25,403,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,213,-1,25,403,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,213,-1,25,403,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,213,-1,25,403,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test956.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)