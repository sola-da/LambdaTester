





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f!BO'] = null
base_0[9] = 595
return a/b+c
};
var argument2 = ["r0Wv?`","q%=","(","y","+v"];
var argument3 = ["!",";"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = "l9"
argument5[0] = "#v&@D"
return a/b/c
};
var argument5 = [705,"="];
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = ["j"]
base_2[6] = null
return a*b-c
};
var argument8 = true;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = null
argument11[705] = null
base_3[7] = ""
return a-b*c
};
var base_0 = [157,823,82,"S1",82,"7","{"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,823,82,"S1",82,"7","{"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,823,82,"S1",82,"7","{"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,823,82,"S1",82,"7","{"]
var r_3= undefined
try {
r_3 = base_3.some(argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test183.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)