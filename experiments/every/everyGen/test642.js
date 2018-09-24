





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][6] = null
return a+b+c
};
var argument2 = {"25":3.387522284690507e+307,"213":242,"242":"{","1.5482394346398888e+308":"$e+","1.4029033139063663e+308":"#"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = {"W":"","Z":"","":-1,"x":""}
base_1[1][2] = [100,969,122,242,627,403,618,0]
return a*b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = ""
argument5[6] = null
base_2[2][7] = null
return a-b*c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = {"0":"')","59":"U=","627":"","":"<[r6","w#":"","1.7914560816182587e+308":"","H":"+","1.0689050026297125e+308":6.311860308783267e+307,"7.622986814944821e+307":""}
argument7[3.3156198695370476e+307] = null
base_3[5] = [595,213,82,0,-100]
return a/b/c
};
var argument7 = r_3;
var base_0 = [-100,157,460,-1,783,714]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,157,460,-1,783,714]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,157,460,-1,783,714]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,157,460,-1,783,714]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test642.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)