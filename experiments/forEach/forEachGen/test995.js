





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = false
argument2[157] = ["aa","?","j,e9",";","!","}","U88","T]Av)","i",")"]
base_0[0][595] = null
return a/b/c
};
var argument2 = 1.7600939108849775e+308;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[460][1.2658989034477382e+308] = [59,-100,25,126,969,1.7976931348623157e+308,122,122,59,843]
argument4['7q('] = false
return a-b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['-'] = true
return a/b-c
};
var argument5 = null;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.4570946481947045e+308] = "G"
argument8[-1] = 6.311040187118177e+307
return a/b+c
};
var argument8 = r_0;
var base_0 = ["}",")h","s4N","=","1","<M_%:VPb","NB4V+L"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["}",")h","s4N","=","1","<M_%:VPb","NB4V+L"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["}",")h","s4N","=","1","<M_%:VPb","NB4V+L"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["}",")h","s4N","=","1","<M_%:VPb","NB4V+L"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test995.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)