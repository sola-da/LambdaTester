





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = [403,-100,59,-100,595,59,0,59,403]
argument2[4] = "'x"
argument1 = ""
return a*b*c
};
var argument2 = false;
var argument3 = ["-;Y","X","^","&","IyY1","]","6"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = ""
base_1['length'] = {"82":100,"100":"T","595":2.488642544068132e+307,"783":242,"H":"","":893,"O":6.136601020137008e+307,"1.2968395046116973e+308":1.7139497698869438e+308,"1.2132927893141232e+308":";>l"}
argument5[1] = null
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = true
argument6[1.9097830510613482e+307] = 2.134432413164192e+307
argument7[4] = null
return a*b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = null
return a*b-c
};
var base_0 = [893,100,893,607,655,242,49,59]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,100,893,607,655,242,49,59]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,100,893,607,655,242,49,59]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,100,893,607,655,242,49,59]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test719.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)