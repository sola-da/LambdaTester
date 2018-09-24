





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"8":0,"\u001f[\u001c´\u0015Ë\u0003M":0,"ü":0.44777379372356707,"½µ":{"à":0.9976618317828094},"ì\u001ep¥pQF\u000e":0,"\u000f\t":8,"ùÐü-¥®":-6,"è·VI»²\u0015Ê¥G":18}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument3 = ["0+","A"];
var argument4 = {"213":"","618":714,"1.1850590874489097e+308":"<k","r`":8.624482879827024e+307,"3.8350415936058995e+307":1.6804708052941125e+308,"":">E","ma":9.425166395606674e+307,"d":6.092443021696181e+307,"W_":"","'p":627};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "\u001fñ\r\u000b"; };
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -6.691992894094079; };
var argument8 = "";
var argument9 = r_0;
var base_0 = [969,100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,100]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,100]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test436.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)