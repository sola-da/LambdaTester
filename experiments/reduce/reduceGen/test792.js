





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = 823
base_0[4] = {"403":"","5.488416066072774e+307":-1,"5e-324":"","4.80745958809932e+307":""}
return a*b+c/d
};
var argument2 = r_1;
var argument3 = r_1;
var argument4 = {};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = ""
return a/b-c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = null
return a/b+c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = {"126":1.4304468030667502e+308,"":"e","uj":618,"1.0281732783526575e+307":5.779114396238279e+307}
argument9 = [0,157,-100]
argument9['HMm'] = "W"
return a*b+c-d
};
var argument8 = null;
var argument9 = null;
var base_0 = [823,705,618,823,213,5e-324,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,705,618,823,213,5e-324,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,705,618,823,213,5e-324,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,705,618,823,213,5e-324,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test792.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)