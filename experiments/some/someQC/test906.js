





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -11.019560164818266; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -97; };
var argument6 = ["=",893,893];
var argument7 = 4.96448603546859e+307;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -93; };
var argument9 = {"49":">ac","82":"","2.1528525877358591e+307":"(","w<AC":"aP","1.684538637410213e+308":1.7813397646710416e+307,"5.8582171153706e+307":82};
var argument10 = null;
var base_0 = ["Do+","b","lN","I"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Do+","b","lN","I"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Do+","b","lN","I"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Do+","b","lN","I"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someQC/test906.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)