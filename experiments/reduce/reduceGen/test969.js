





var callbackArguments = [];
var argument1 = null;
var argument2 = 82;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = null
argument3[1] = false
argument2[7] = false
return a-b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6] = false
argument6[100] = {"0":"","783":823}
argument5[0] = ""
return a+b*c-d
};
var argument6 = [823,460,-100,213,25,-100,607,705,25,893];
var argument7 = null;
var argument8 = r_1;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[';N'] = false
argument7[0] = true
argument6['Cb'] = true
return a/b/c*d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[100] = false
argument11[6] = "Jl$"
return a*b/c*d
};
var base_0 = [714,157,893,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,157,893,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,157,893,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,157,893,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test969.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)