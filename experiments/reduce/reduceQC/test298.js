





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 42; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument4 = {"4":"","25":714,"126":"*N","":1.3344365515514337e+308,":":"!","P":"","I5":595,"X":4.085498077452794e+307,"5.33015224342154e+306":969,"?<idy?*z":""};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [-0.5852889771743655,"¥",2.6536366620281315,false,null,false,20]; };
var base_0 = [82,1.7976931348623157e+308,460,100,893,157,157,213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,1.7976931348623157e+308,460,100,893,157,157,213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,1.7976931348623157e+308,460,100,893,157,157,213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,1.7976931348623157e+308,460,100,893,157,157,213]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test298.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)