





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 90; };
var argument2 = {"":49,"LR":714,"1.3536698467692432e+308":""};
var argument3 = {"157":"Pb"};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 67; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return "ýHKãÁ"; };
var argument9 = [460,0,714,595,122,157,213];
var argument10 = 969;
var base_0 = [122,-1,969,823,-1,-100,1.7976931348623157e+308,82]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,-1,969,823,-1,-100,1.7976931348623157e+308,82]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,-1,969,823,-1,-100,1.7976931348623157e+308,82]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,-1,969,823,-1,-100,1.7976931348623157e+308,82]
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
require("fs").writeFileSync("./experiments/every/everyQC/test467.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)