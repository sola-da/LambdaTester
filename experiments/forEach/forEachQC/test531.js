





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [-0.9475402520492551,"W",-2.9501531523992126,1,-2.938054252063619,false]; };
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -94.1472388700492; };
var argument5 = false;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "\u0005ô§\u0004J½h"; };
var argument8 = true;
var base_0 = ["Lzy","=`,Zr","O[","P","+O+",",","W5","F#u?","TV"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Lzy","=`,Zr","O[","P","+O+",",","W5","F#u?","TV"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Lzy","=`,Zr","O[","P","+O+",",","W5","F#u?","TV"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Lzy","=`,Zr","O[","P","+O+",",","W5","F#u?","TV"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test531.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)