





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = 783
base_0[3][1] = true
base_0[8] = null
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['AO?'] = {"403":"","Pi":"","":1.5666038694642296e+308,"5.973494350171709e+307":"RA-","eB`1":"V","E":""}
argument3[3.7668525981726295e+307] = false
return a-b/c
};
var argument3 = r_1;
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = [969,49,1.7976931348623157e+308]
return a*b/c
};
var argument6 = r_1;
var argument7 = {"49":"f8","122":1.4934010441767222e+308,"783":4.33662548784879e+307,"969":"`-","^":"","1.4828538368711239e+308":"","":"","x":1.3449833935418516e+308,"k":"IF*"};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][7] = {"S":"ZY"}
argument9[1.0500354979187844e+308] = ""
argument10[5] = [618,627]
return a+b/c
};
var argument9 = r_2;
var base_0 = ["ee","d=-","s","RA9","R^"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ee","d=-","s","RA9","R^"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ee","d=-","s","RA9","R^"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ee","d=-","s","RA9","R^"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test320.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)