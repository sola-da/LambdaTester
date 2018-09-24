





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.5887552427096746e+308] = {"25":"","9.707411737650506e+307":157,"e!":1.2989509087019741e+308,"u4":"","iP":2.4519047497110473e+306,":":"","":"%UP","1.0152246671632606e+308":126}
base_0[5] = true
return a*b-c-d
};
var argument2 = 6.163872728138491e+307;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = {"":"4"}
argument4[9.624051682326797e+306] = 5e-324
argument3 = ""
return a*b-c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][3] = {"157":714,"2.616646685379819e+307":"","1.715808229600326e+308":157,"-100":"nF"}
argument6[655] = null
argument5[627] = 1.7854354113101375e+308
return a+b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.4250811791542279e+308] = null
argument6['^N'] = {"213":"","403":6.343141848325443e+307,"fy7":1.3640172886238806e+308,"-100":"","2.57075938266072e+307":607,"+Ln":8.086974594293131e+307,"":1.6547879784973274e+308,"zZ":9.83610973280476e+307}
argument7[7] = null
return a-b/c-d
};
var argument6 = r_1;
var base_0 = ["fwy","6","mH","("]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["fwy","6","mH","("]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["fwy","6","mH","("]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["fwy","6","mH","("]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test742.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)