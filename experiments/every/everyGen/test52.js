





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = ["0","U",893,823]
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = 8.564202910490013e+307
base_1 = {"403":1.493820674767777e+308,"607":"","1.7976931348623157e+308":213,"b":8.647029874950395e+307,"":100,"|":126,"-1":1.2484910504016066e+308,"3.432931785456675e+307":8.455170510563758e+307,"K":"c,","7.684328665498127e+307":82}
return a/b+c
};
var argument3 = true;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = false
base_2[2] = 627
return a+b+c
};
var argument6 = {"122":6.513179956956407e+307,"714":4.736863204667712e+307,"1.006478609530841e+308":"","8.918278653753508e+307":969,"7.140754571588437e+306":"x","3.524507593816126e+307":213,"":-100,"imjI":4.760069439522623e+307};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = null
return a+b*c
};
var base_0 = [100,783,893,607]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,783,893,607]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,783,893,607]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,783,893,607]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test52.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)