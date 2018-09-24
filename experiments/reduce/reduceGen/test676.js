





var callbackArguments = [];
var argument1 = {"49":"i","":"#=","5e-324":607,"1.3764918573753591e+308":"","1.9216486472365785e+307":"k(","FrD":1.3226147518389497e+308,"[":82};
var argument2 = null;
var argument3 = "i";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = null
argument3 = ""
base_0[1][0] = true
return a-b+c+d
};
var argument5 = null;
var argument6 = r_1;
var argument7 = [1.7976931348623157e+308,82];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = true
argument7[25] = 1.193932068407512e+308
base_1[5] = null
return a-b/c+d
};
var argument9 = r_0;
var argument10 = "6";
var argument11 = r_1;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[7.889879335222838e+307] = {"82":"","157":"S5Ia","1.3834577362795545e+308":"C","5.167375826231156e+307":"C","":122,"T":969,"ma":"F","6.645365262048548e+307":"6","4.875857132762486e+307":1.0436715768146573e+308}
return a-b*c+d
};
var argument13 = true;
var argument14 = r_1;
var argument15 = {"1.671178444449307e+308":8.200271700720448e+307,"5C9U":1.6891445456506327e+308};
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15 = true
return a*b*c/d
};
var base_0 = [-1,705,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,705,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,705,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,705,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test676.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)