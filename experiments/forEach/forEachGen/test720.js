





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9] = {"82":823,"157":403,"655":1.6407594021899624e+308,"9.466845680569945e+306":1.469374131162268e+308,"":1.5463601443669238e+308,"x":2.241984359110215e+307,"1.4786311505895691e+308":25,"@":2.7034750107470893e+307,"4.3558235784565994e+307":4.667661998258042e+307,"-100":0}
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = {"82":"","aq)8":1.4959551886392408e+308,"e":"","gH_p^q":1.6210049712105716e+307,"#>":"O"}
argument3['ns'] = {"783":627,"":"zs","#vd":714}
argument4[49] = ""
return a*b*c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = [0,403,126,82,82,655,82,-1]
base_2[1] = ""
return a-b-c
};
var argument5 = [49,213,403,-1,893,82,59,59,1.7976931348623157e+308];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][1] = ""
return a/b*c
};
var argument7 = true;
var argument8 = null;
var base_0 = [655,655,460,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,655,460,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,655,460,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,655,460,823]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test720.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)