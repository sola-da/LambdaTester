





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = {"0":3.1886950609758187e+307,"59":126,"126":9.44929659856342e+307,"655":618,"823":1.652089498712054e+308,"":"","G":"","1.7269262355489946e+308":"","1.6938021335589972e+308":-1,"3.3640697691186263e+307":100}
argument3[59] = "NW"
return a+b+c
};
var argument2 = [82,0,893,627,242,1.7976931348623157e+308,82,0];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.0481490052276395e+306] = true
argument5[4] = 1.3196116608924205e+308
return a/b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['wIs'] = 9.729236966774215e+307
argument5[1] = [783,893,126,893,100,893]
base_2 = null
return a*b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.0446313380579697e+308] = true
argument7[1.3130321063336282e+308] = [705,-1,403,49,"<a",714,"z"]
return a*b+c
};
var argument7 = "";
var argument8 = false;
var base_0 = [82,893,"U","4"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,893,"U","4"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,893,"U","4"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,893,"U","4"]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test516.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)