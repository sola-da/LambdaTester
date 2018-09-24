





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = 969
base_0[2] = "m"
argument1 = 714
return a/b+c*d
};
var argument2 = null;
var argument3 = true;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = null
argument4[5] = false
return a/b-c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = [-100]
return a/b/c/d
};
var argument7 = false;
var argument8 = true;
var argument9 = null;
var argument10 = true;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = "H"
argument9[4] = null
return a*b/c/d
};
var base_0 = [126,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test96.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)