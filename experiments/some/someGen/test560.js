





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = [607,"P@","vF","p$m","jG]"]
argument2[403] = true
return a-b+c
};
var argument2 = ["BFN","|Bd6","G24","iG","Q!","kx"];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = false
return a-b/c
};
var argument5 = {"157":"!ItsB","783":242,"893":"Q"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = null
argument7['j'] = null
return a+b*c
};
var argument7 = r_1;
var argument8 = {"213":655,"893":5.971170195508861e+307,"":1.7467232967168334e+308,"7.004668712060429e+307":59};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[7.004668712060429e+307] = {"k":1.5665185793923981e+308,"c#":"{","8.526293616241545e+307":""}
argument10['f'] = [627,25,823,403,783,627]
argument11[0] = ""
return a-b+c
};
var base_0 = [213,59]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,59]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,59]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,59]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test560.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)