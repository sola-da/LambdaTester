





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [null,false,1,false,-9.341567005440243,true]; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -22.859752483658525; };
var argument4 = {"783":403,"y":"","2 ":"q&E","":"|h","7.359326828610031e+307":1.7554256485904913e+308,"9.540723213938656e+307":7.146777938772256e+306,"1.342830247424628e+307":618,"1.4721178114423258e+308":82};
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [242,607,-100,157,607,403]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,607,-100,157,607,403]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,607,-100,157,607,403]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,607,-100,157,607,403]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test826.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)