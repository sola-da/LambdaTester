





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = ""
argument1[893] = "^"
argument3 = ""
return a*b*c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[460] = null
base_1[0] = ["=n!v",213,893,"3f",823]
argument5[126] = {"3":823,"25":"=","":1.3430029840645956e+308,"IZ,e":157,"Z":"","F":8.523305515686846e+307,"1.3015093478180305e+307":0}
return a*b-c*d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[595] = null
base_2[0] = 5.98470567861192e+307
argument7[893] = [1.7976931348623157e+308,82]
return a/b+c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][4] = 2.841329353744525e+307
argument9[1.1277822633002616e+308] = {"1.7976931348623157e+308":""}
base_3[6] = 122
return a-b/c-d
};
var base_0 = ["]-","A","kV2"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]-","A","kV2"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]-","A","kV2"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]-","A","kV2"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test696.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)