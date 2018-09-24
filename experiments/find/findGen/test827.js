





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = false
argument3[783] = [783,618]
return a+b+c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = 714
argument6[4] = ""
return a-b-c
};
var argument5 = false;
var argument6 = {"627":"z","969":5e-324,"2.1370187370417755e+307":82,"":"`42","1.655437291553218e+308":"","[":8.50190692007445e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.0500354979187844e+308] = {"59":"KX","1.002040230507018e+308":1.1881888464115996e+308,"f-m":969,"":1.611056866022973e+308,"1.3618707999928265e+308":"}"}
argument7[893] = [403,618,"]"]
argument9[969] = 9.764888173932289e+307
return a/b+c
};
var argument8 = {"627":607,"J)S":"","1.6243569955246084e+308":1.600540521929961e+308,"(":969};
var argument9 = false;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = null
argument12['LK'] = {"460":242,"893":"$1=y:","1.2947024915568194e+308":"(RH","e":2.3662647370926807e+307,"":"C"}
base_3[2] = 3.057565720041381e+307
return a/b*c
};
var base_0 = [595,823,213,1.7976931348623157e+308,460,783]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,823,213,1.7976931348623157e+308,460,783]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,823,213,1.7976931348623157e+308,460,783]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,823,213,1.7976931348623157e+308,460,783]
var r_3= undefined
try {
r_3 = base_3.find(argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test827.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)