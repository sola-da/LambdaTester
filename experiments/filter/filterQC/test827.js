





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [false,null,1.8664583297508832]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"2u£":"±Ù","¿\u001fïuµßüÐ":6.852439947434278,"f\u0019ínH":0,"¤àÜ¬'\u001fdÔs":false,"ì¾O&Å\u000b áp":["`",0,3,null],"w²ò":1.6564714025523435}; };
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -56; };
var argument6 = true;
var base_0 = [823,969,"%",969]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,969,"%",969]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test827.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)