





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -5; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "2ib"; };
var argument3 = true;
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "pãb"; };
var argument6 = 7.731439710881056e+307;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return {"\u000fxDNSå\u0010":"+",">Xû\u0011Òv%ê":0,"\\J\u0012¶Õ":"\n\u0006","/S|Õ\u0013m©":".","£":3.6011513491305394,"õKa4\u0015Ñ¯":5,"ô§Òa":0,"\u0007áÎá×3":-42}; };
var argument8 = {"0":242,"25":"km","59":3.9935946732943995e+307,"61":8.030261803464955e+307,"":"","C(":6.167903717191642e+307,"1.370810017534976e+308":49,">":1.2863238241005741e+308};
var base_0 = ["*","d_#v"]
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
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test616.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)