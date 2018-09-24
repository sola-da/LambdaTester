





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['y'] = null
base_0[4][3] = 242
return a+b+c*d
};
var argument2 = {"82":"b{Vn","705":969,"H":627};
var argument3 = {"705":6.114496336856856e+307,"2.976054893489791e+306":"","tO":"","1.7688754036238504e+308":"O","":"dI","-100":843,"$+EC":"'+","3.2719606044214875e+307":1.5024644741757354e+308,"M":59};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = ["a","4i"]
return a/b*c+d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.5288038039415373e+308] = {"403":""}
base_2[4][1.7976931348623157e+308] = null
return a-b-c*d
};
var argument7 = {"59":"<&","82":1.2065779480975507e+308,"618":1.7976931348623157e+308,"":-1,"1.3711592335433266e+307":969,"1.050708518645899e+308":2.3665917855177267e+307,"1.0187119146299378e+308":595,"2.1878770515065988e+307":"r","bP":""};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = 460
return a/b-c+d
};
var argument9 = {"d":"g","":5.143668152603886e+307,"1.661788254241038e+308":-100,"5.727599550748681e+307":"ziIL"};
var argument10 = null;
var base_0 = ["`"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test796.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)