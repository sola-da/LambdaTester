





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = [783,843,595,25]
argument2[-1] = null
base_0[0][1] = null
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['wIs'] = [25,"+BBp","f="]
argument4[0] = null
return a+b*c
};
var argument3 = null;
var argument4 = [595,627,783,595,1.7976931348623157e+308,100,242,5e-324,122];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = ""
base_2[0][823] = true
return a+b+c
};
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1] = false
argument8 = "6"
return a/b+c
};
var argument8 = true;
var base_0 = [714,843,969,157,655,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,843,969,157,655,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,843,969,157,655,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,843,969,157,655,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test293.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)