





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6][2] = [460,157]
argument3[4] = [-100,100,25,823,714]
base_0[0] = false
return a/b/c-d
};
var argument2 = 618;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = {}
base_1[4] = null
return a*b-c+d
};
var argument4 = "AL";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8.575765443877852e+307] = {"5":"K","823":627,"":"","4.898670874382906e+307":1.17216637004474e+308,"`":"","1.5576545106665314e+308":"","'":627,"6.055931893934415e+307":"","1.47132868508043e+308":403}
argument6 = true
base_2[7] = [655,"p"]
return a/b/c*d
};
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = ["2","d4","o","m","|","z","dE",")","aT&"]
return a*b/c-d
};
var argument9 = r_0;
var argument10 = true;
var base_0 = ["H","KYO6","Z*","]X"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H","KYO6","Z*","]X"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H","KYO6","Z*","]X"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H","KYO6","Z*","]X"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test140.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)