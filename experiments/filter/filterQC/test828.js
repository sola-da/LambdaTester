





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = {"i":"G;I,]!",";2":";","9.490185568956587e+306":"B@*"};
var argument3 = -100;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -43; };
var argument5 = r_1;
var argument6 = 1.740431810130517e+308;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -63.485842897261; };
var argument8 = {"4":"","595":783,"Yh7I1#":"","%":"8","2.686369876418535e+307":"P","":783,"8.605023684725387e+307":1.444430541060944e+308,"6sW_":"","c":""};
var argument9 = r_1;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return [0]; };
var argument11 = {"126":4.4089198799546335e+306,"":"","Q":1.4693671767620884e+308,"7.60363517731738e+307":893};
var base_0 = ["G",",T","9","O8+2E5<",460,";","c","nl",705]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test828.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)