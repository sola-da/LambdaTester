





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -82.94936944899021; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [null,-0.28193581506190446,null,true,null,null,"°\r-Wc"]; };
var argument3 = false;
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -5.020690647818271; };
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 69.61425218310642; };
var base_0 = ["(z","Tp",-1,-1,"a","_#DJw","]",969,"d|+"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(z","Tp",-1,-1,"a","_#DJw","]",969,"d|+"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(z","Tp",-1,-1,"a","_#DJw","]",969,"d|+"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(z","Tp",-1,-1,"a","_#DJw","]",969,"d|+"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test988.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)