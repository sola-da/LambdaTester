





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"ä×\u0017»:i":0.5882840282149147,"£â":-1,"´yqê":"z¢+","ÙïæG":false,"Qýb":"¦â\u0001T"," ":-22,"îøà":"\u0017ó62"}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [-0.8286770200603939,null,null]; };
var argument3 = true;
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = r_2;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 44.6250291587027; };
var base_0 = [122,213,595,157,783,893,969,213]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,213,595,157,783,893,969,213]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,213,595,157,783,893,969,213]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,213,595,157,783,893,969,213]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test154.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)