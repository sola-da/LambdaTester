





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -37.12296281873522; };
var argument2 = ["Z","{","?",">L"];
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -83; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -50.851999184491035; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return {"":0,"-ê\u000b":-0.35250663442788843,":)":0,"#":-1.6398179045964048,"áæà":-4}; };
var base_0 = [714,893,627,"A"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,893,627,"A"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,893,627,"A"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,893,627,"A"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someQC/test223.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)