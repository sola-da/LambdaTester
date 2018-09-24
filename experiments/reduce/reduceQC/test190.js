





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 36; };
var argument2 = r_0;
var argument3 = [49,714,157,655,82,126];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 4; };
var argument5 = null;
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = r_2;
var argument10 = null;
var base_0 = ["vh[_","3v-= H","[8k","2h","|z8","Q","eC","E!"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["vh[_","3v-= H","[8k","2h","|z8","Q","eC","E!"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["vh[_","3v-= H","[8k","2h","|z8","Q","eC","E!"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["vh[_","3v-= H","[8k","2h","|z8","Q","eC","E!"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test190.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)