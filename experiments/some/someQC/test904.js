





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -90.03600441858902; };
var argument2 = null;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return ["\u0018",[],0,-2]; };
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -14.434059388642595; };
var argument9 = {"":"c"};
var base_0 = ["dx",843,157,242]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["dx",843,157,242]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["dx",843,157,242]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["dx",843,157,242]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someQC/test904.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)