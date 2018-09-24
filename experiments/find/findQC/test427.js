





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [null,"Â",-1,null,false]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = "";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = r_0;
var argument6 = {"403":"g@Zz","1.3097447795990767e+307":"","dB":82,"7.199546950176394e+306":5.197662223883925e+307,"7.500627425899161e+307":"","g":6.004962972088667e+307,"":5e-324,";j":"S"};
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = true;
var argument9 = 843;
var base_0 = [969,969,460,"s","?2o>P",655]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,969,460,"s","?2o>P",655]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,969,460,"s","?2o>P",655]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,969,460,"s","?2o>P",655]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findQC/test427.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)