





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = true
return a-b*c
};
var argument2 = {"460":"S","705":1.3353788568773737e+308,"1.383896869425885e+308":"","1.198451160797141e+308":"U","-1":"E[","4.1296872324040443e+307":3.2670507062864576e+307,"":"L","[":")O"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = ""
base_1[3][1] = [783,25,-1,460,607,969,403,-100]
return a-b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['AO?'] = null
return a-b+c
};
var argument5 = null;
var argument6 = {"0":"})","460":"","714":"","783":242,"1.1547631657525749e+308":82,"":"","yK":893,"-100":"","1.7348060980845463e+308":0,"1.2314794363761327e+308":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = 403
base_3[3] = true
base_3 = 59
return a-b+c
};
var argument8 = null;
var base_0 = ["Yc",-1,126,893,59,"QD",":",607]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Yc",-1,126,893,59,"QD",":",607]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Yc",-1,126,893,59,"QD",":",607]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Yc",-1,126,893,59,"QD",":",607]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test961.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)