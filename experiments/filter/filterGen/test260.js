





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = 714
return a*b+c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = {"1":"_IQ8","100":122,"595":1.2049878471804973e+308,"!":"","f":1.2327534357635355e+308,"1.1073416810345524e+308":"","1.1314923760512652e+308":1.5474898023762937e+308}
base_1[4] = {"823":"r","":"7"}
base_1[4] = 460
return a/b*c
};
var argument4 = {"":1.365526357932553e+308,"n9":1.2433930589653532e+308,"1.1237989136244628e+308":"??"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = "!`z"
argument7[-100] = {"c":1.5556897368562238e+307}
return a+b+c
};
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3.0481490052276395e+306] = [460,655,655,-100,969,655]
argument9[3.0481490052276395e+306] = "(>"
argument10[2] = [157,0,1.7976931348623157e+308,213]
return a/b/c
};
var argument9 = true;
var argument10 = null;
var base_0 = [49,5e-324]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,5e-324]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test260.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)