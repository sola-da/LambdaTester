





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "Õ w"; };
var argument2 = 655;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return ["","6",null,false]; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "\u0002\u0019ÿ\u0002Ç¶\u001eÙ\u0017"; };
var argument5 = null;
var argument6 = 1.154855064411882e+308;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = 242;
var argument9 = r_3;
var base_0 = ["e","a","E&PU","o","b0","[JI"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e","a","E&PU","o","b0","[JI"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e","a","E&PU","o","b0","[JI"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e","a","E&PU","o","b0","[JI"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someQC/test404.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)