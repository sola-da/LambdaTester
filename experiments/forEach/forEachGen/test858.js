





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = [714,25,1.7976931348623157e+308,100]
argument3[1.4034744228995816e+308] = null
return a+b/c
};
var argument2 = [100,893,783,627,59,-100,783];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.2421645642809447e+308] = null
base_1 = {"49":607,"403":"5[","1.701415207708226e+308":"","6.426721239204682e+307":783,"]":"","":">GJZ","4.464936367497225e+307":1.2626535060489396e+308,"c":"","8.291174058912292e+306":"znS"}
argument4['-'] = false
return a/b-c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['$*I'] = true
return a-b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.9097830510613482e+307] = [1.7976931348623157e+308,157,655,49,783,783,157,607,627]
argument7['5pji-Y'] = 1.3720939620880168e+308
argument7[157] = ""
return a/b+c
};
var argument7 = {"213":843,"595":969,"5.133494612800139e+307":1.2406687844726587e+308,"#o":"","2.384529885413377e+307":969};
var argument8 = null;
var base_0 = [403,595,460,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,595,460,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,595,460,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,595,460,627]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test858.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)