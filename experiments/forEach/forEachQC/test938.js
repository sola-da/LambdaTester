





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 16.849165838699864; };
var argument2 = {"25":"etGf;","1.3351646573041122e+308":1.283896269598877e+308,"":"No","2.899026469480456e+307":"-r,-","2.4504837340413813e+307":"","Ol@":2.76589595675279e+307};
var argument3 = {"":"-a","0S*n":1.6867966269191668e+308,"L":4.3627454330695207e+307,"+":5.703501795562037e+307,"[":"e"};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "CÔ9\n"; };
var argument5 = true;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -93.19279363942383; };
var argument8 = r_2;
var argument9 = null;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return -70.50877041310082; };
var argument11 = true;
var argument12 = null;
var base_0 = [893,25,-1,157,59,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,25,-1,157,59,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,25,-1,157,59,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,25,-1,157,59,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test938.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)