





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = false
argument2[0] = ""
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][5e-324] = ""
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = 213
return a*b+c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = null
argument7['T'] = ["%","=r_","Dn","5X","W[","|(}",";","1","y{"]
return a*b-c
};
var argument6 = [823,157,969,627,618];
var argument7 = false;
var base_0 = [122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test262.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)