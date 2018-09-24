





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"0":"rdQK","":705}
argument2[7] = ["q9<P","3O,",25,"7",":",1.7976931348623157e+308,-100,"iT"]
argument2[-1] = ["B"]
return a-b-c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1] = 5e-324
return a-b-c-d
};
var argument3 = true;
var argument4 = {"49":"","627":"","1.0785578037202067e+307":"","9.094385564006123e+307":1.3918110343246832e+308,"6.247114572406944e+307":1.6883569985278243e+308};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[25] = {"843":1.0231102283353681e+308,"X?R":2.468150091054484e+307}
return a+b-c-d
};
var argument7 = ["a","]",25];
var argument8 = false;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[595] = ["x","Hu","i","A","^jq","zK","$X","i%"]
base_3[3][1] = {"100":213,"":714}
return a-b-c-d
};
var base_0 = ["K","d","l",1.7976931348623157e+308,126,"|Q",655,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K","d","l",1.7976931348623157e+308,126,"|Q",655,655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K","d","l",1.7976931348623157e+308,126,"|Q",655,655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["K","d","l",1.7976931348623157e+308,126,"|Q",655,655]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test869.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)