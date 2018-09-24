





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = null
argument2[0] = true
return a/b-c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[627] = false
base_1[9] = "^N5g!c"
base_1[8] = null
return a/b-c/d
};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = null
base_2[0] = false
argument4 = {"lrDp":"","1.0387405339669805e+308":1.4844476221929944e+308,"":126,"1.3132925433868976e+308":"r7"}
return a+b/c/d
};
var argument5 = 5e-324;
var argument6 = null;
var argument7 = null;
var argument8 = true;
var argument9 = {"82":1.9336468549053119e+307,"100":6.084336789206041e+307,"460":1.3558385643196702e+308,"3.889705337111702e+307":9.28560738541556e+307,">md>":"2","77(":3.2812906779993377e+307,"4%":1.6256431334648464e+308,"":""};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[627] = ["VGDg","o",893,627,705,"Ls","c]A",122]
base_3[0][0] = ""
base_3[3] = null
return a/b*c+d
};
var base_0 = ["XGE",157,843,82,"k"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["XGE",157,843,82,"k"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["XGE",157,843,82,"k"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["XGE",157,843,82,"k"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test122.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)