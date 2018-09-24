





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9.869573703797622e+307] = {"618":"","fv":"D","":655,"4.989309227716171e+307":25,"3.7603353200832835e+307":"Nt","d":"s<B","$":705,"1.7796313527406545e+308":1.6537183171194879e+308}
argument2[1] = false
return a-b*c
};
var argument2 = ["O","2","-","{c","%}","^","K7#","&"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = {"242":"vK","N":"w","":"Ek","5.384119638983494e+307":4.219698828510499e+307,"2.5608764526123174e+307":1.7976931348623157e+308}
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = null
return a+b*c
};
var argument5 = [705,"lN0","}","n","]c?:",714,49];
var argument6 = {"595":1.709463233696348e+307,"@":1.3905271882011267e+308,"1.3269123035414567e+308":2.298598727891349e+307,"1.673345277140917e+307":"","":"","1.0872622336907372e+308":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[82] = ""
argument8[1]['d'] = false
base_3[7] = ["w",714,714,823,-100,705]
return a/b*c
};
var base_0 = [655,126,-1,0,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,126,-1,0,403]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test344.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)