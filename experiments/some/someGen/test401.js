





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = ""
argument1[4] = null
base_0['length'] = ["E"]
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.6798476101238045e+308] = null
return a+b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['f!BO'] = null
base_2[4] = false
return a/b/c
};
var argument4 = r_1;
var argument5 = r_2;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = null
base_3[1]['{X'] = null
return a+b/c
};
var argument7 = true;
var argument8 = {"618":"","714":"","5aJeXf":"","^h":893};
var base_0 = [460,82,-100,0,893,403]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,82,-100,0,893,403]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,82,-100,0,893,403]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,82,-100,0,893,403]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test401.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)