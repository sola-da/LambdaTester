





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1679954109349114e+308] = {"607":"","k":"0%d","7.058315418478669e+307":25}
return a/b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][7] = {"893":1.6592174498733378e+307,"":843,"3.9712747779842656e+307":5e-324,"l":100,"hC ":25,"yx":"3n","1.3989377422798742e+308":"","%B0u]":1.1955954713516316e+308}
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = null
argument6[0] = ""
base_2[4][2] = null
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = "F"
argument6[893] = [823,157,25,242,1.7976931348623157e+308,893,82,-100,843,655]
base_3[1][3.5329845145600404e+307] = "7"
return a+b+c
};
var argument6 = {"1.038998950019157e+308":"|A","2.9303416391357654e+307":"","1.755069599544185e+307":"O","":"","3l":7.924333104258841e+307};
var base_0 = [5e-324,0,82,59,783,618,100,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,0,82,59,783,618,100,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test721.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)