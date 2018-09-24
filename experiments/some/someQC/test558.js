





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = false;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 19.946782700977938; };
var argument5 = r_0;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return {"EjQ»V°Ù":0,"Â\\Vð)":0,"²¨Ä":[],"lF2\u000f±":true,"\u0002\u000fFÊû\rd":false,"¾\u0004zxu":24.13134550779519,"8Yº!v":"6wØR","À¯¥":18.72839107372117}; };
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = false;
var base_0 = [893,157,618,843,460,-100,100,403,157]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,157,618,843,460,-100,100,403,157]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,157,618,843,460,-100,100,403,157]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,157,618,843,460,-100,100,403,157]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someQC/test558.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)