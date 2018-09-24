





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[100] = [25,843,460]
argument2[6] = "C"
base_0[0][1] = [157,-1,-1,49,893,823,714]
return a*b+c
};
var argument2 = [595,242,714,403,627,705,25];
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['AO?'] = [25,157,-1,-100,714,-1,893]
base_1[1] = true
argument5[1] = [460,969,126,-1,25,25,893,655]
return a-b*c
};
var argument5 = 1.3768124866645556e+308;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[8.748669805137695e+307] = true
base_2[0][0] = null
return a/b-c
};
var argument8 = null;
var argument9 = 1.3281745684561246e+308;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = {"g,":"TDF^8"}
return a-b-c
};
var argument11 = "";
var argument12 = true;
var base_0 = [607,100,969,403,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,100,969,403,893]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,100,969,403,893]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,100,969,403,893]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/find/findGen/test160.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)