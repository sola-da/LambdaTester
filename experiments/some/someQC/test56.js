





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"A3&à":false,"ö":0,"7¾zk\u0019":false,"S©R¢":true}; };
var argument2 = "SJ2";
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = [714];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return " T\u0013\u0015ÅüQ"; };
var argument7 = null;
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 90.4904359372136; };
var argument10 = null;
var argument11 = null;
var base_0 = [714,"jIZ3_",969,"lBz$",157,"%"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"jIZ3_",969,"lBz$",157,"%"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"jIZ3_",969,"lBz$",157,"%"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"jIZ3_",969,"lBz$",157,"%"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someQC/test56.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)