





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = 7.576779353298499e+307
argument2['K'] = [-1,0,157,82,607,783,705,627]
base_0[1][2] = [618,-100,607,49]
return a+b+c*d
};
var argument2 = "f";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = 2.8596513167337493e+307
argument5[2] = ["RW)<","y","wE","c)","$","S"]
return a/b*c+d
};
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['^N'] = 655
return a/b+c*d
};
var argument6 = {"618":"ud","627":"","893":1.4984730222907421e+308,"":"","1.3285967926811747e+308":"","4fC;":"c'","6.116502381487087e+307":"","8.680808289157991e+307":1.3267057124654265e+308,"<y7":2.4956351204206144e+307,"1.4074625167204224e+308":6.979968170188516e+307};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6] = {"100":5.60108018432937e+307,"3x":157}
base_3[0][0] = ""
argument8[4] = {"82":4.500946222784028e+307,"]":122,"1.0716536814780848e+308":"","e$":"#n)","":9.716970487322123e+307,"1.7976931348623157e+308":1.3484985230485392e+308}
return a+b+c-d
};
var argument8 = false;
var base_0 = ["KN",";-",":"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["KN",";-",":"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["KN",";-",":"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["KN",";-",":"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test650.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)