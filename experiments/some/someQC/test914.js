





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -30; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -52.390686069145275; };
var argument3 = r_1;
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [false,0,-1,null]; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [0,true,-1.0369745174452039,false,".è"]; };
var argument7 = null;
var argument8 = null;
var base_0 = ["5zRt","&1|((","#"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5zRt","&1|((","#"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5zRt","&1|((","#"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5zRt","&1|((","#"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test914.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)