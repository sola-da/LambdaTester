





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[714] = null
argument2[3] = {"1.4732604798250257e+308":"o:","":"","9.495961831446027e+306":"","4.0892337714401664e+307":"","1.4192401444231004e+308":2.300056007632811e+307,"[":":","1.5781060344996856e+308":82,"FFR@":213,"5.686593257861191e+307":"","6.266464508335149e+307":""}
argument2[3] = false
return a*b+c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = {}
base_1[0] = [969,460,126,242,0]
return a-b+c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = null
argument7[893] = 403
base_2[7] = 1.3349914636115496e+308
return a+b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"607":1.5349064088466454e+308,"627":"","893":"D","1.7976931348623157e+308":618,"1.0577040443447152e+308":49,"":100,"mI":122,"5.68950665532673e+307":627}
base_3[8] = false
return a-b/c
};
var base_0 = [1.7976931348623157e+308,"wX",595,893,"c",">P8lMW",0,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"wX",595,893,"c",">P8lMW",0,893]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"wX",595,893,"c",">P8lMW",0,893]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,"wX",595,893,"c",">P8lMW",0,893]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test130.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)