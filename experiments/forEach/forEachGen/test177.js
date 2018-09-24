





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][0] = false
return a+b/c
};
var argument2 = [655,1.7976931348623157e+308,705,595,-1,-100,403];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = [714]
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = true
base_2 = ["2","I","M","Ae","ej","t:","L"]
argument7[0] = [893,49,403,1.7976931348623157e+308,126,618,655]
return a/b*c
};
var argument6 = r_0;
var argument7 = "z";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = {"823":4.795997069107754e+307,"":"ZW","9.086082056082709e+306":9.910114618636142e+307,"1.239315699495906e+308":100}
return a*b-c
};
var base_0 = ["B","l","="," ","O$","Z",":","&;Qn","zI1"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B","l","="," ","O$","Z",":","&;Qn","zI1"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B","l","="," ","O$","Z",":","&;Qn","zI1"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B","l","="," ","O$","Z",":","&;Qn","zI1"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test177.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)