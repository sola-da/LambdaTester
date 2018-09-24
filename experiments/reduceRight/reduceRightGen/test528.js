





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = null
base_0[7] = {}
return a*b-c+d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = ""
base_1[0][0] = [893,823,607]
return a-b+c+d
};
var argument4 = {"969":"I"};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][2] = 7.902803596519521e+306
base_2[0][0] = {"126":893,"213":"s","595":"","1.482713132125456e+308":8.234014313995765e+307,"iO":"","-?":"z","1.690718760308241e+308":6.629480236196541e+307,"":1.464928042402789e+308}
return a+b+c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = {"0":"","242":"","705":1.1530253708021494e+307,"843":49,"":655,"-100":"","1.3896396770301682e+308":9.327093229385558e+307}
return a-b-c/d
};
var argument7 = r_2;
var base_0 = [618,59,"=",705,618,"a"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,59,"=",705,618,"a"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,59,"=",705,618,"a"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,59,"=",705,618,"a"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test528.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)