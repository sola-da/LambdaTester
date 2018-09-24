





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"Çò,]FJùÀ":0.7299937367694735,"7?{Ñøl":"»",",sä}«:áÈ":-7.206637609122995,"A":"JÃ","#J":true,"³\\":-45,"tá55èß":false}; };
var argument2 = {"3":",s>H","":""};
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [0,0,-3.4156835526414566,0,null]; };
var argument5 = "uN";
var argument6 = ["+","SD)","Zr","XML"];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return {"":0.13050811139905627,"ªÔiHè®\u0015":-0.66384789064818,"\u0006>1c":true,"ÒÇ·o%¬Æ|":0,"ðøê1Ê¦ó":15.815769396910788,"fô\u000ea":27.34048082664369,"²î":"Rð¶\u0005","Ï":-37.0070788334667}; };
var argument8 = null;
var argument9 = false;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument11 = null;
var base_0 = ["7","fo","("]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7","fo","("]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7","fo","("]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7","fo","("]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test66.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)