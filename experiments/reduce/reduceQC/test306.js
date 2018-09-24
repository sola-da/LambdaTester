





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 53.28967759943444; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"Áv\u001esÃ|5Ò\u000f[":-0.7620739023345924,"Z\u000f\u001aG\u001d6¡":{"8":-0.49994420047323507},"á":true,"®u\u000fí":-11.885131763064997,"_`Þ\u0002¾/Ó":2,"¦_":9.898023274831933,"ÿO­\u00162çOB":-14,"¢B®Ì!y":true,"\u000e=è0cÊØÑ":41}; };
var argument5 = 2.248588450662409e+307;
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -16.06888908563; };
var base_0 = ["N","X-khH","i","A<","$mu","MrIj","?"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N","X-khH","i","A<","$mu","MrIj","?"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N","X-khH","i","A<","$mu","MrIj","?"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N","X-khH","i","A<","$mu","MrIj","?"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test306.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)