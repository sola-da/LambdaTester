





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = null;
var argument3 = ["<","uth]","R","J","=","m","p]CiD`E"];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [false,0,null]; };
var argument5 = null;
var argument6 = 122;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = ["=+",")",595,618,607,783,823,242,"a&L,D","H"];
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 35.457291178695336; };
var argument10 = r_2;
var argument11 = r_1;
var base_0 = [":","o","h","Z0q;L5","*e"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test410.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)