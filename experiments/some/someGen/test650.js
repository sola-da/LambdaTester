





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][4] = {}
argument3[3] = null
return a*b*c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = 100
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = [714,460,893,-1,893,213,607,618]
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['V'] = 655
return a/b-c
};
var base_0 = [59,783,893,1.7976931348623157e+308,100,618,460,126]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,783,893,1.7976931348623157e+308,100,618,460,126]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,783,893,1.7976931348623157e+308,100,618,460,126]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,783,893,1.7976931348623157e+308,100,618,460,126]
var r_3= undefined
try {
r_3 = base_3.some(argument5)
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
require("fs").writeFileSync("./experiments/some/someGen/test650.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)