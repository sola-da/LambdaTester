





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[607] = {"627":"#-","":893,"1.3268609053437648e+308":"","b":7.898814043269374e+307}
return a*b/c
};
var argument2 = {"157":"","618":59,"823":5.431843136459588e+307,"3.014924511830729e+307":126,"1.0651879838640592e+308":"2O","":"E","E(":"q","1.4906831247118493e+308":122};
var argument3 = {"213":-100,"5e-324":"Fz"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1.4677087964888306e+308] = "Y"
argument5[ ] = 1.3241325661606296e+308
return a+b/c
};
var base_0 = [893,969,460,82,595,59,-1,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,969,460,82,595,59,-1,627]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
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
require("fs").writeFileSync("./experiments/map/mapGen/test999.json",JSON.stringify({"baseObjects":serialize([base_0,base_1]),"returnObjects":serialize([r_0,r_1]),"callbackArgs":callbackArguments}))
},300)