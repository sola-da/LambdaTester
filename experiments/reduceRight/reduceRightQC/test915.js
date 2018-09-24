





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -89; };
var argument2 = 8.36922255956091e+307;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [false,-0.2699625291487586,null]; };
var argument7 = null;
var argument8 = r_0;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return {"¸ê¾Ik8\u0003'÷":-0.6885060829542116,"é":{},"\u001fáÈÛï4ðv\u000e9":3,"\u0016e":false}; };
var argument10 = {"157":"","403":"lz","":49};
var argument11 = r_0;
var base_0 = ["HhC:]M",607,655,"x","?"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["HhC:]M",607,655,"x","?"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["HhC:]M",607,655,"x","?"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["HhC:]M",607,655,"x","?"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test915.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)