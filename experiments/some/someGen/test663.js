





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9] = [714,82,403,242,25,714,-100,595]
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = {"618":607,"":1.1830768764982048e+308,"KN":4.232635392714892e+307,"-":"t","8.027212640736438e+307":100,"1.515599341582475e+307":"","_t":1.515499445763601e+308}
return a+b*c
};
var argument3 = ["=","7","V$"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = 82
base_2[1][0] = null
return a*b-c
};
var argument5 = [460,"c)"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = false
argument7[1] = ["es:","R&",59,"vT","tEM"]
argument8[893] = null
return a+b*c
};
var argument7 = true;
var base_0 = [82,627,607,1.7976931348623157e+308,893,595,122,59,823]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,627,607,1.7976931348623157e+308,893,595,122,59,823]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,627,607,1.7976931348623157e+308,893,595,122,59,823]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,627,607,1.7976931348623157e+308,893,595,122,59,823]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test663.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)