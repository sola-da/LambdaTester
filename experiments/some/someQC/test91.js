





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 48.73440416411543; };
var argument4 = {"1.3367413290040761e+308":5.308797206742064e+307};
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -43.65560981218284; };
var argument7 = false;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return [0.7653936662202951,0,{"5":true},null,-8.188159031374731,null]; };
var argument9 = null;
var argument10 = false;
var base_0 = ["B","=[9","BgJ)","gAbK","8","h","B","J","y"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B","=[9","BgJ)","gAbK","8","h","B","J","y"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B","=[9","BgJ)","gAbK","8","h","B","J","y"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B","=[9","BgJ)","gAbK","8","h","B","J","y"]
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
require("fs").writeFileSync("./experiments/some/someQC/test91.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)