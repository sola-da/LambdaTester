





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -22.17418795120656; };
var argument3 = {"460":5.229209214347997e+307,"655":157,"8.884447985787871e+307":9.732020957704176e+307,"9.921663566756569e+307":"Xc*XAo0w","5.811867245860105e+307":"#y","":893,"1.0103046873891339e+308":"Ph",";aG":460};
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = "U5n";
var argument7 = r_2;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return "Fñ'WÐþ%"; };
var argument9 = true;
var argument10 = null;
var base_0 = [403,100,705,627,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,100,705,627,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,100,705,627,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,100,705,627,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test895.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)