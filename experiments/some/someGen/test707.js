





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[705] = {"3.154516229783593e+306":1.3757779045200242e+308,"^":893}
base_0[3][6] = {"1.6840223201830088e+308":"w"}
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.6798476101238045e+308] = 6.425941604767096e+306
base_1[3][4] = {"7.658871226278411e+307":"M#M","":"","'6":6.189253730613382e+307,"6.422490234595088e+307":"X-M","Z":1.1014282312943739e+308,"w":"0p"}
base_1[3] = 714
return a/b/c
};
var argument3 = 9.55121261582859e+307;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8] = 627
base_2[5] = true
return a/b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['V'] = "D<o"
base_3[2][5] = false
argument6[1] = "HP"
return a+b/c
};
var argument7 = true;
var base_0 = [100,5e-324,49,-100,82]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,5e-324,49,-100,82]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,5e-324,49,-100,82]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,5e-324,49,-100,82]
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
require("fs").writeFileSync("./experiments/some/someGen/test707.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)