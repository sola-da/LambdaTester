





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = 5.079713462813522e+307
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['T'] = "I"
return a/b/c
};
var argument3 = false;
var argument4 = [843,-100,49,893,59];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['j'] = true
return a*b*c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = 25
argument8[5] = true
argument7[4] = false
return a-b*c
};
var argument8 = null;
var argument9 = r_3;
var base_0 = [157,627,618,242]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,627,618,242]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,627,618,242]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,627,618,242]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test333.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)