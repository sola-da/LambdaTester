





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"\u000eÄÛçýËë\u0013":[],"®ñ¸ïþ¨$":[],"Èßû÷":1,"ý5K+d½":5,"ç¿¢Éft":-24,"ò":0.6449539161302926,"²¥\u0005)X":[-0.36948798343824674,null],"V¾":false,"ÎI\u001axO·/\u001av":-64}; };
var argument2 = r_0;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -91; };
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 66; };
var argument7 = true;
var argument8 = "";
var argument9 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument10 = null;
var base_0 = [-1,100,823,714,1.7976931348623157e+308,783]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,100,823,714,1.7976931348623157e+308,783]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,100,823,714,1.7976931348623157e+308,783]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,100,823,714,1.7976931348623157e+308,783]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someQC/test206.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)