





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = "V"
argument3[5] = null
return a-b/c
};
var argument2 = [969,49,714,82,714,242,714];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = [783,157,607,122,100,49]
base_1 = [-100,460,655,242,-1,-1,460,714,25]
base_1[3][1] = null
return a+b-c
};
var argument4 = "tr";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = null
argument7[1] = 655
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = 627
argument8[2] = ""
base_3[1] = true
return a*b+c
};
var base_0 = [25,-1,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,-1,-1]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,-1,-1]
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
require("fs").writeFileSync("./experiments/map/mapGen/test631.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)