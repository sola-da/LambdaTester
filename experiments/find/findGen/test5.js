





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = null
argument2 = [843,126,783,213]
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = {"":"7","1.2926110887799269e+308":705}
base_1[0] = false
return a-b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = 627
return a-b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = null
return a/b+c
};
var argument5 = "";
var argument6 = null;
var base_0 = [-1,82,82,627,-100,714,843,157,627]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,82,82,627,-100,714,843,157,627]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,82,82,627,-100,714,843,157,627]
var r_2= undefined
try {
r_2 = base_2.find(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,82,82,627,-100,714,843,157,627]
var r_3= undefined
try {
r_3 = base_3.find(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test5.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)