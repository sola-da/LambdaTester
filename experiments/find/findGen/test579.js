





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = {"242":5.555016799022585e+307,"714":"^","783":7.164694226139349e+307,"893":"","bh":"^q","7.535773649325592e+307":"iHKgQ","":5e-324,"9.623967497712836e+307":9.933939753160584e+307,"Mw^":783}
argument2['='] = true
return a/b/c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = {}
base_1[3] = ""
return a-b/c
};
var argument4 = "";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = 823
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = {"893":"","H?":5.68908791321096e+307,"4.952354701950879e+307":1.446459586414369e+308,"1.3992866574951061e+308":">","":"","-1":1.432103192225979e+308,"Z":"mk!,3*^<<"}
argument6[893] = {"242":"","595":1.6468190290280654e+308,"Z":"P","1.1609398233216802e+308":"r","1.5255367497742062e+308":-1}
base_3[0][3] = ["n+"]
return a-b*c
};
var argument7 = null;
var argument8 = r_2;
var base_0 = [-1,82,893,0,25]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,82,893,0,25]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,82,893,0,25]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,82,893,0,25]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test579.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)