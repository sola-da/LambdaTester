





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = 714
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[157] = ["fgQ","L","+","e"]
argument4[59] = true
argument3[1.7394185942769049e+308] = null
return a-b/c
};
var argument3 = r_1;
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[157] = {"655":"","783":1.1105558975904284e+308,"+":"nQ","2.841436368661283e+307":"+rm","7.57601706434361e+307":"","tar#":"8t"}
argument6['U+WQ'] = 1.3195610909187657e+308
argument6[403] = {"6.140420292341725e+306":1.7462780783928948e+308}
return a-b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = 122
argument6 = null
base_3[0][4] = true
return a*b-c
};
var argument7 = null;
var argument8 = true;
var base_0 = [460,460,627,627,122,607,714,823,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,460,627,627,122,607,714,823,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,460,627,627,122,607,714,823,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,460,627,627,122,607,714,823,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test769.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)