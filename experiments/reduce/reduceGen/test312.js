





var callbackArguments = [];
var argument1 = r_0;
var argument2 = false;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = {"82":6.347285173192741e+306,"618":"","893":"","":4.500160311563022e+307,"1.6501253252992801e+307":"B"}
return a*b-c-d
};
var argument5 = {"49":1.5570740932118301e+308,"618":"I","]_":"5aK","(MR":783,"":"","1.2802661455870047e+308":"","6.729347192392119e+307":7.89160833416256e+306,"1.7304599927084855e+308":783};
var argument6 = null;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = null
return a*b+c*d
};
var argument9 = [403,893,893];
var argument10 = false;
var argument11 = "C+`";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[59] = null
argument9['s'] = null
argument10[7.463432409233234e+307] = null
return a-b+c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[7] = "m"
base_3['length'] = -100
return a*b/c-d
};
var argument14 = false;
var argument15 = "ScX";
var base_0 = [627,969,843,627,213,0,403,893,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,969,843,627,213,0,403,893,25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,969,843,627,213,0,403,893,25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,969,843,627,213,0,403,893,25]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test312.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)