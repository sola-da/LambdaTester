





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['a8r['] = 1.7976931348623157e+308
argument3['n,5s@s'] = {"122":"","403":"","(":"eX&nE","1.1115470948725078e+308":"71","":"_","1.2245804065868134e+308":1.6125401021723595e+308,"1.6059380021281525e+308":1.1191297343714261e+308,"1.7960242061467857e+308":8.507813803289103e+307,"3.326386079205909e+306":705,"-q":122}
return a/b+c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = null
argument5[1.7976931348623157e+308] = "m"
return a/b-c
};
var argument4 = "D";
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[-1] = 705
argument6[7.92397107964922e+307] = 460
return a/b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = [783,714,213,714,100,157,126]
base_3[2] = {"":8.800452071324304e+307}
return a*b-c
};
var argument8 = null;
var argument9 = r_1;
var base_0 = [213,969,242,25,618,100,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,969,242,25,618,100,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,969,242,25,618,100,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,969,242,25,618,100,213]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test926.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)