





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 84.32085874891793; };
var argument2 = null;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = {"893":"","":1.2833910079036087e+308,"1.2348338590731009e+308":"","q":705,"1.4436136186439628e+308":9.471574687627239e+305,"2.419328363222315e+307":";","3.3643247520228374e+307":607,",I,":1.783381726765443e+308};
var argument7 = ",X";
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 48; };
var argument9 = false;
var argument10 = null;
var base_0 = [714,")r",";n4M",969,"w",595]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,")r",";n4M",969,"w",595]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,")r",";n4M",969,"w",595]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,")r",";n4M",969,"w",595]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyQC/test86.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)