





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"zâG\u001b\u001dÚ":false,"ecÂyY\u0001":false,".ÐË":true,"AËÐÊ":-8,"\u001c":7,"Ô":"\u0011zvÛå","IhÔßôy©":true}; };
var argument2 = [126,893,25,403,126,5e-324,59,157];
var argument3 = "";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -84.91334298849358; };
var argument6 = null;
var argument7 = ["@",157,25,"I>","?%T9X%=","|l","&8"];
var argument8 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument9 = r_1;
var argument10 = false;
var base_0 = [213,403,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,403,595]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,403,595]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,403,595]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapQC/test959.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)