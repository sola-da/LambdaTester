





var callbackArguments = [];
var argument1 = 1.690682444519448e+308;
var argument2 = null;
var argument3 = {"100":893,"618":1.3019676993571718e+308,"1.7627661621255174e+308":25,"1.6722127532894108e+307":-1,"":157};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = {"":"$","Tv+":4.2879580810732383e+307}
return a-b*c-d
};
var argument5 = false;
var argument6 = null;
var argument7 = {"2.890022507217165e+307":";","":"e","w":1.1373032742792263e+308};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = {"5":"","126":"UK","460":9.051834543338141e+307,"":"","8.765014449780475e+307":893,"1.7976931348623157e+308":460,"1.2153029408957428e+308":"#NO","Q]":"si","7.528294534245123e+307":122}
argument6[-1] = [627,126]
return a*b*c+d
};
var argument9 = 823;
var argument10 = null;
var argument11 = 8.482230292105663e+307;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = {"49":"","213":"","714":"Q","Dr":1.6545899298106146e+308,"3.2416166400331386e+307":"","VE,v}":"","@d`":"","1.77856732206893e+307":595,"":595,"FQ":1.092374126766535e+308}
return a+b+c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[3] = null
argument14[460] = 4.549049452879547e+307
return a-b-c*d
};
var argument14 = false;
var argument15 = null;
var base_0 = [-1,823,969,-100,0,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,823,969,-100,0,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,823,969,-100,0,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,823,969,-100,0,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test726.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)