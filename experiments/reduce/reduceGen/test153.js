





var callbackArguments = [];
var argument1 = true;
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = [25,157,213,122,49,25,595]
argument2[7] = null
base_0[2] = false
return a*b-c-d
};
var argument5 = r_1;
var argument6 = {};
var argument7 = 6.634647033653226e+306;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = {"":705,"&X":"9","ot":1.341695243133759e+307}
base_1[9] = 82
base_1[0] = false
return a/b+c+d
};
var argument9 = "+";
var argument10 = "";
var argument11 = {"+":"","":823,"7.503648583212338e+307":"{"};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = ["n","sk"]
argument10[25] = {"82":9.54191680661319e+307,"595":"{","823":5.643757891647357e+307,"s":"","1.4894335659891693e+308":5e-324,"1.0597151119087302e+308":1.1520452862680246e+308}
return a*b*c*d
};
var argument13 = true;
var argument14 = r_0;
var argument15 = r_2;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[1] = 3.1915495558458157e+307
argument13 = [705,969,"z&?","$","[","2`mUA","j"]
return a+b/c+d
};
var base_0 = ["P","H","x","i","R"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P","H","x","i","R"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P","H","x","i","R"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P","H","x","i","R"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test153.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)