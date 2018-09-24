





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 40; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = true;
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return {"gÓ`§\u0013":"ã","Åèg":false,"\u000b]":-3.804725052935318,"ø¸8\u000eÒ¬":-3.78917046465164,"a":12,"Uûm»ß":10.525882071622926}; };
var argument6 = 893;
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return [0,-0.7364589492062203]; };
var base_0 = ["y","<",",","Z",122,627,595,82,"6v",893]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["y","<",",","Z",122,627,595,82,"6v",893]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["y","<",",","Z",122,627,595,82,"6v",893]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["y","<",",","Z",122,627,595,82,"6v",893]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test515.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)