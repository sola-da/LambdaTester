





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0,false,null,false,-4.915643385798521,false]; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 12.871029884201967; };
var argument4 = null;
var argument5 = {"714":"X","r7":25,"+$":"K'd","1.468034940823208e+307":"","":"r","1.5267746181775913e+308":"","8.610892195844212e+307":"J"};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = null;
var argument9 = null;
var base_0 = [25,122,783,122,969,25,460,595,969]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test361.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)