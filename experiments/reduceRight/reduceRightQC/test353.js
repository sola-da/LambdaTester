





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [true]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = ["JJ",1.7976931348623157e+308,"-","7",122,"I","{jB","l1F",157];
var argument4 = {"25":823,"49":"sb","Yj2O-M`qF":""};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "áKh"; };
var argument6 = false;
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return [0,[],{"\u0004Ä":0,"é":false},false,false,-13.316561297856977,33.94129773229517]; };
var argument9 = ["K","l",893,25,"x",100,607,"[&Zd",100];
var argument10 = [893,"J",0,"M",823];
var base_0 = [618,607]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,607]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test353.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)