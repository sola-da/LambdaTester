





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 67.25552078494472; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "Ê\n\u001e\u001dcØ\r"; };
var argument3 = 82;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -7.435376360496426; };
var argument5 = false;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "q\r"; };
var argument7 = null;
var base_0 = [157,"M",213,",_",157,"b",0]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,"M",213,",_",157,"b",0]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test641.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)