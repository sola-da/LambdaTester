





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = true
return a/b+c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = "Mx;'rA"
base_1[5] = null
argument6[6] = 893
return a/b+c
};
var argument5 = r_1;
var argument6 = {"1.6621727021244832e+308":6.968532289606721e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = 5.757548595668794e+307
return a*b-c
};
var argument8 = 1.0504029822691925e+308;
var argument9 = "h";
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = "l"
argument11[1.6798476101238045e+308] = " "
argument12[1] = {"49":595,"460":82,"607":"","823":126,"QW8":1.0864823262598504e+308,"f":595,"":122,"WM":"I-k","h":""}
return a/b/c
};
var argument11 = {"":8.695798620653303e+307};
var base_0 = [823,595,627,122,1.7976931348623157e+308,714]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,595,627,122,1.7976931348623157e+308,714]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,595,627,122,1.7976931348623157e+308,714]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,595,627,122,1.7976931348623157e+308,714]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test42.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)