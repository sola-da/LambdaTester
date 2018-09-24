





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"\bÂé":-0.30399619882115525,"Ñ=Õ\u0019":true,"\u001a\r":[]}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument3 = true;
var argument4 = "";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return {"Ò+e£¨ª2/":-0.09340990268376315,".«±DYÖlm\u0002":"0","\\yð\u0015Cq\\":-8,"ÕBBI":false,"~5Ö¨":true,"IyN1\u0013)":34}; };
var argument6 = 607;
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["Vh","7","XucO","F","{"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Vh","7","XucO","F","{"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Vh","7","XucO","F","{"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Vh","7","XucO","F","{"]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test495.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)