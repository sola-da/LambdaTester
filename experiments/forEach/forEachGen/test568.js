





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['wIs'] = null
base_0['length'] = 4.740005804888603e+307
argument2['?'] = true
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.462967293930506e+307] = 893
return a+b-c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = {"627":"!7Mqp","c":"<","0-":6.280098900556784e+307,"":"","La":-100,"QLA":"","|JQ7E":""}
return a/b*c
};
var argument5 = 213;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = true
return a-b*c
};
var argument7 = {"100":"p","5.518286689604848e+307":1.4391422954136616e+308,"1.5391649188231499e+308":4.8701696061156084e+306,"":618,"7.007898666665442e+307":893,"6.395217929628179e+307":"","}^azQ":"","Y":"M"};
var argument8 = {"242":5.662900531374459e+307,"":"&","1.174604059198259e+308":6.035532060275635e+307};
var base_0 = [403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test568.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)