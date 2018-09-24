





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [false]; };
var argument2 = {"1":655,"122":"EYR","-100":823,"":1.442850986196257e+308,"1.0263236799540323e+308":"","1.4592881572758609e+308":"","7.342422763890615e+307":1.758836627906837e+308,"K":")","%R":"6","1.6315857684708044e+308":"TPfG(R%-+B"};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -38.83143600981662; };
var argument5 = null;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 96.30765033314637; };
var base_0 = [607,627,607,714,627,607,0,460,157,618]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,627,607,714,627,607,0,460,157,618]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,627,607,714,627,607,0,460,157,618]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,627,607,714,627,607,0,460,157,618]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findQC/test512.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)