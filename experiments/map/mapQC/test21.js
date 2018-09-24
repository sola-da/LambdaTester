





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 93.68090450750779; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 76; };
var argument4 = 1.4218478235290193e+308;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = r_2;
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -48.59282018464186; };
var argument9 = {"595":"","1.1794102925665973e+308":"V4n","9.014130314135065e+307":1.4392329128711586e+308,"5e-324":893};
var base_0 = [403,25,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,25,242]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,25,242]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapQC/test21.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)