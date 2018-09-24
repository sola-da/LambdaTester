





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"®":false,"\u0019PÒwæÑ~":"b","ç":-3.3242613913552415,"%¨\\\u0002/Í1oý":13.769399294412992,"üË#":7,"ÙZ":-17.444453629362684}; };
var argument3 = r_1;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -46; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var base_0 = ["`L",1.7976931348623157e+308,"u","SG&",607]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`L",1.7976931348623157e+308,"u","SG&",607]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`L",1.7976931348623157e+308,"u","SG&",607]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`L",1.7976931348623157e+308,"u","SG&",607]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findQC/test509.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)