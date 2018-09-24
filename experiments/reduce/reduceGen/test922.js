





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5.71178064163152e+307] = {"627":"","":59,"?u":"Y","4.2136552412706305e+307":403,"1.6224954282360153e+308":893,"4.171926917170788e+307":122,"Txw4":100,"1.321881184373732e+308":"","6.818382727603859e+307":"l","-":"-g"}
base_0[8] = ""
return a/b*c*d
};
var argument2 = null;
var argument3 = r_1;
var argument4 = 25;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['HMm'] = [460,0,1.7976931348623157e+308,893,893]
argument3[7] = null
return a-b-c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5.71178064163152e+307] = {"655":"N7*","1.1768474106338887e+308":122,"1.123858609023367e+308":1.5644957475574937e+308,"5.740363251910142e+307":"w","3.614568425478944e+307":595,"L":"","1.5523289907453316e+308":1.3701297726232244e+308,"":1.795056950096231e+308,"`":59}
return a/b*c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = ["I`","1","S_Q","P3ujIP","{@X6"]
argument7[3] = 1.0771272661124863e+308
return a*b+c*d
};
var argument8 = r_1;
var base_0 = [893,969,126,157,49,655,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,969,126,157,49,655,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,969,126,157,49,655,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,969,126,157,49,655,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test922.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)