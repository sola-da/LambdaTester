





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -1.255186921933693; };
var argument2 = true;
var argument3 = {"7.073305320189049e+307":"","":"","Bt":"","4.712146541256184e+307":"ah","4.960918702053864e+307":"52","6.376828791624742e+307":"h"};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = false;
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 6; };
var argument8 = false;
var argument9 = null;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return -76; };
var base_0 = ["PLtL",157,"EA",893,"<75","nwP","v","u",618]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["PLtL",157,"EA",893,"<75","nwP","v","u",618]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["PLtL",157,"EA",893,"<75","nwP","v","u",618]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["PLtL",157,"EA",893,"<75","nwP","v","u",618]
var r_3= undefined
try {
r_3 = base_3.every(argument10)
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
require("fs").writeFileSync("./experiments/every/everyQC/test916.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)