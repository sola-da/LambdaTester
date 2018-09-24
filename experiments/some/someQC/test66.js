





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = {"3":",s>H","":""};
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"ë;}ø¢":true,",í­Ð":-0.06709392074408882,"05":3.360340977300827}; };
var argument5 = "uN";
var argument6 = ["+","SD)","Zr","XML"];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return {"7µ²m\u0011\u001e¼®":0,"íª¸g":"Ì","\u0012":5,"Á>7ËiÌ¯":-5}; };
var argument8 = null;
var argument9 = false;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument11 = null;
var base_0 = ["7","fo","("]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7","fo","("]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7","fo","("]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7","fo","("]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someQC/test66.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)