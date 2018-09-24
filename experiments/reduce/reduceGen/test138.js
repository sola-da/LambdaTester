





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = [893,1.7976931348623157e+308,714,126,59,242,705,893]
base_0[7] = 213
argument2[213] = [595,213,893,82,618,0,-100]
return a/b*c+d
};
var argument2 = {"1.6562488889850745e+308":3.9808048779211e+307,"&PU":9.164237330232993e+307,"1.4543463167399675e+308":"","2.78064836918544e+307":100};
var argument3 = 5.6738883381283516e+305;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = false
return a-b*c*d
};
var argument5 = null;
var argument6 = r_1;
var argument7 = false;
var argument8 = 1.154855064411882e+308;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = null
return a/b-c*d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = ""
base_3[1][0] = null
return a*b+c/d
};
var base_0 = ["wo","q","S"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["wo","q","S"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["wo","q","S"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["wo","q","S"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test138.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)