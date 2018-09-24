





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f!BO'] = [714,-1,0,126,823,714,122,655]
argument3[1] = ""
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = ""
base_1['length'] = false
return a/b*c
};
var argument3 = [460,705,460,627,0,-1,893,783];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = -1
argument6[0] = [59,82,157,49,0,823,1.7976931348623157e+308,403,157]
argument6[7] = 1.2353781150550332e+308
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[893] = {"0":"#E","100":1.7250769979162076e+308,"595":3.9570406100223243e+307,"H":1.7976931348623157e+308,"1.0403358484934544e+308":100}
return a/b/c
};
var base_0 = [1.7976931348623157e+308,59,893,893,618,0,-100,403,893,403]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,59,893,893,618,0,-100,403,893,403]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,59,893,893,618,0,-100,403,893,403]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,59,893,893,618,0,-100,403,893,403]
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
require("fs").writeFileSync("./experiments/some/someGen/test937.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)