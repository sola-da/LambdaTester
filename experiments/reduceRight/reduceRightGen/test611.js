





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = -100
argument2[7] = "^Q>"
return a*b*c*d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = "]"
argument5 = 25
argument3[1] = null
return a/b/c+d
};
var argument4 = 1.491556156909473e+308;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = {"705":"","823":"","4.1465308452274066e+306":""," 'Z":3.243335759693684e+307,"3Uw":"","JfrEH":"76"," -":""}
argument6['w'] = [49,"%","Ck"]
argument6['^N'] = {"49":714,"100":"vGP","403":"V6","":"i","1.0161339784142027e+308":"4","1.6676598323036674e+308":-100,"G":""}
return a+b*c-d
};
var argument6 = 7.207880023215329e+307;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[627] = null
argument8[3.8120440085202614e+307] = 714
argument8['^N'] = 607
return a/b-c-d
};
var argument8 = null;
var argument9 = null;
var base_0 = ["=",")*"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=",")*"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=",")*"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=",")*"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test611.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)