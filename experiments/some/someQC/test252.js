





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -31; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -47.986253523594556; };
var argument5 = 893;
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return [null,-0.5882723038353395,"\u001fÃ",[],11,null]; };
var argument8 = null;
var argument9 = null;
var base_0 = [-100,655,714,82,"{G","{F",595,823,"{9H","N,"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,655,714,82,"{G","{F",595,823,"{9H","N,"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,655,714,82,"{G","{F",595,823,"{9H","N,"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,655,714,82,"{G","{F",595,823,"{9H","N,"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someQC/test252.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)