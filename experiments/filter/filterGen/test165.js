





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = 1.4730291131410172e+308
argument2[4] = true
return a-b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1]['!cck7Mm'] = [59,157,"i&",969,"Rv","@D"]
return a/b*c
};
var argument4 = true;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-100] = true
argument7[4] = false
argument7[4] = [823,0]
return a*b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['filter'] = true
return a/b*c
};
var base_0 = ["(","Vs<9[k","=",";@to","@4zZ","Bn)","^2","0,2@","L"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(","Vs<9[k","=",";@to","@4zZ","Bn)","^2","0,2@","L"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(","Vs<9[k","=",";@to","@4zZ","Bn)","^2","0,2@","L"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test165.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)