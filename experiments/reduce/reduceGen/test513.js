





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = ""
return a*b*c*d
};
var argument2 = null;
var argument3 = true;
var argument4 = {"":8.276781122731794e+307,")To'":"","9.232409623477477e+307":6.098944487091467e+307};
var argument5 = {"655":"","B1u":"Nih"};
var argument6 = {"2":"","893":"C_!mWk","":8.869814748993978e+307,"-1":1.7538791931809753e+308,"$":1.273212930708227e+308,"o":783};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][9.12287810829114e+307] = {"783":49,"843":"2","":595,"1.5930346224431764e+308":5.459674254979266e+307,"P&":"y","5.062647675476955e+307":157,"K?`":4.788154478797263e+307,"8.639664788900972e+307":""}
argument4[9] = null
return a+b*c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = null
base_2[2][0] = 8.472755545423463e+307
argument10['*c'] = [969,"]","f",595,460]
return a-b-c*d
};
var argument9 = true;
var argument10 = [100,893];
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[2] = {"1[h":"{","8T":"","8th":"","":"4","3.4980026463472526e+306":783,"2.9427674006531924e+306":1.1117739039330244e+306}
argument11[9] = 242
return a-b*c+d
};
var argument12 = false;
var base_0 = [-1,157,82,25,627,893,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,157,82,25,627,893,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,157,82,25,627,893,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,157,82,25,627,893,59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test513.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)