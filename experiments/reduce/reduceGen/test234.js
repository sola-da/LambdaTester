





var callbackArguments = [];
var argument1 = 595;
var argument2 = 1.2475246607859463e+307;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = null
return a-b+c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = ""
return a/b*c*d
};
var argument6 = r_1;
var argument7 = {"59":49,"1o":"","I":82,"1.091097094690129e+308":"","8.66230414800313e+307":1.7976931348623157e+308,"-100":"?4"};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = 6.805027174947807e+307
return a/b/c-d
};
var argument9 = [893,25,1.7976931348623157e+308,82,122,242];
var argument10 = {"100":6.300975036024539e+307,"595":"","607":460,"":"{XM","jH":823,"k(<0Y":1.6699259630687572e+308,"6.165382504238789e+307":1.5867686450610462e+308,"|U`H?":2.87579105709624e+307,"9.112187744067367e+307":"","4.4364399700163517e+307":"D"};
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = 1.7976931348623157e+308
return a-b*c+d
};
var base_0 = [607,627,893,595,714,157,49,627,893,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,627,893,595,714,157,49,627,893,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,627,893,595,714,157,49,627,893,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,627,893,595,714,157,49,627,893,969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test234.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)