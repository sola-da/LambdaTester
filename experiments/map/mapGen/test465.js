





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[607] = null
argument2['C'] = null
base_0[1][4] = 122
return a/b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = ""
argument4 = [82,59,714,1.7976931348623157e+308,843,627]
argument4[1.1881593224845412e+308] = [49,82,157,893,403,-100]
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = null
return a+b*c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = null
argument8[1] = [25,-100,893,0,49]
argument7[969] = {"607":2.4677609853034285e+307,"618":1.4221721035511214e+308,"":1.1371096750142205e+308,"1.0359914787697229e+308":"S","S":"[i","1.7976931348623157e+308":1.0763374233698378e+308,"1.148703865208866e+308":"b?X","$":0,"4.759974238319134e+307":607}
return a/b*c
};
var base_0 = ["<",460,213,"]","x",1.7976931348623157e+308,";","#7"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<",460,213,"]","x",1.7976931348623157e+308,";","#7"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<",460,213,"]","x",1.7976931348623157e+308,";","#7"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test465.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)