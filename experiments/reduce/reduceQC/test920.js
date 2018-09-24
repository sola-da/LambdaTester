





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "Z"; };
var argument2 = false;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -17.771860114964454; };
var argument5 = {"":8.09854554008127e+307};
var argument6 = {"0":1.2979244990295718e+308,"82":"?4q","618":100,"":"O","3.514503021441521e+307":126,"]":1.4397922427517089e+308,"_$":4.428496977845646e+307,"8.469939070041101e+307":""};
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 42; };
var argument9 = ";AV%Z";
var base_0 = [655,1.7976931348623157e+308,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,1.7976931348623157e+308,655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,1.7976931348623157e+308,655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,1.7976931348623157e+308,655]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test920.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)