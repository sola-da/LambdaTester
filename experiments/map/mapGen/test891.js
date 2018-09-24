





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = true
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1] = {"242":")","714":1.212552389512923e+308,"4.376519945301536e+307":82,"H5":"","0H":"","5O":5.037833665309879e+307,"":"T)","1(":7.434561291350071e+307,"7.87334334007118e+307":1.2868050200541133e+308}
argument3[49] = ""
base_1[3][3] = null
return a/b+c
};
var argument3 = r_1;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = ""
base_2['map'] = 1.7542732178710003e+308
return a/b+c
};
var argument5 = 5e-324;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = {"9":"","122":969,"":"D","1.1459631336166562e+308":""}
argument8['3Tpj5'] = 9.085574627613196e+307
argument7[2] = false
return a+b/c
};
var argument7 = null;
var argument8 = [213,1.7976931348623157e+308,595,"]",82];
var base_0 = [655,0,969,460]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,0,969,460]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test891.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)