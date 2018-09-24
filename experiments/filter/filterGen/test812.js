





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[126] = true
argument3 = null
argument2['C'] = "]#"
return a+b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[-1] = 8.999501128654969e+307
return a*b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7.82874486699946e+307] = ["^",823,59,783,"?","q",82,"[}","#"]
argument6[403] = true
argument6[1.7847438319683965e+308] = null
return a*b/c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['n,5s@s'] = "1"
argument7[4] = "9"
argument8[618] = [783,607,893,627,893,893,714]
return a+b/c
};
var argument7 = [25,25,618,705,618,82];
var base_0 = [100,"!","e","<sb8-","O","4^","WZ#",122,705,"w"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"!","e","<sb8-","O","4^","WZ#",122,705,"w"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"!","e","<sb8-","O","4^","WZ#",122,705,"w"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,"!","e","<sb8-","O","4^","WZ#",122,705,"w"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test812.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)