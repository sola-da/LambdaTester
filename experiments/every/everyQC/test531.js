





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -12; };
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"´](\u0001":true,"8\u001c\u0013klIòY":0,"LaV®K":[],"Õ":3.61734325435057,"_":9.768172728418133,"Lgf":-20}; };
var argument5 = false;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return {")8C":false,"\u0010Ý":0,"À,":-3.696504229524522,"ñQ[7":true,"ß.^í«":-7.689343146009875,"h©":false,"e¡æ":-43,"æ":42}; };
var argument8 = true;
var base_0 = ["Lzy","=`,Zr","O[","P","+O+",",","W5","F#u?","TV"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Lzy","=`,Zr","O[","P","+O+",",","W5","F#u?","TV"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Lzy","=`,Zr","O[","P","+O+",",","W5","F#u?","TV"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Lzy","=`,Zr","O[","P","+O+",",","W5","F#u?","TV"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test531.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)