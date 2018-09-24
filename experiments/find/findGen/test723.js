





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[100] = {"607":"","k":"0%d","7.058315418478669e+307":25}
return a/b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6][4] = {"893":1.6592174498733378e+307,"":843,"3.9712747779842656e+307":5e-324,"l":100,"hC ":25,"yx":"3n","1.3989377422798742e+308":"","%B0u]":1.1955954713516316e+308}
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = null
argument5[3][6] = ""
argument4[893] = null
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = "F"
argument6['='] = [823,157,25,242,1.7976931348623157e+308,893,82,-100,843,655]
base_3[3][1.7261030733891165e+308] = "7"
return a+b+c
};
var argument6 = {"1.038998950019157e+308":"|A","2.9303416391357654e+307":"","1.755069599544185e+307":"O","":"","3l":7.924333104258841e+307};
var base_0 = [5e-324,0,82,59,783,618,100,618]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,0,82,59,783,618,100,618]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,0,82,59,783,618,100,618]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,0,82,59,783,618,100,618]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test723.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)