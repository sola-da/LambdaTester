





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 9; };
var argument2 = 0;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return {"E\u000f\u0012b4~J":-0.34818490640000954,"À\f\u0012\u0003«äí":0,"ú\u0010¯ßöÆ":[false],"¸¤m\n":-3.3017998569081293,"ô>@ÿÍÅ":true,"ý²ù§\u0010}":-27,"-2Ï\\\u0018":true,"¨y~-ªñÐ²l":3}; };
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 30; };
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = "-_a[`d";
var argument9 = r_1;
var base_0 = ["J(","B","|","^h%","&","{$","zC>","Ki@"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["J(","B","|","^h%","&","{$","zC>","Ki@"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J(","B","|","^h%","&","{$","zC>","Ki@"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J(","B","|","^h%","&","{$","zC>","Ki@"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findQC/test441.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)