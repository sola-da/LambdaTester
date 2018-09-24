





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.738403780925446e+308] = {"460":"Y","":3.375493780022009e+307,"1.7976931348623157e+308":"","N2":1.0461765777594917e+308,"1.368300000019949e+308":"","S-":8.959172345561256e+307,"1.7806379069838817e+308":655}
return a*b-c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = null
argument3[8.575765443877852e+307] = {"403":618,"893":"i","9.816033320567357e+307":-1,"72<3":"T8","1.0966443546360954e+308":"O","6.189332447704862e+307":"","7.243479825950762e+307":"F)l","":"B","v":1.483996090786302e+308,"[m":1.6120200798944953e+307}
argument3['K'] = "cI"
return a+b+c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = true
return a/b*c+d
};
var argument4 = r_0;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = null
argument6[0] = 627
return a*b*c+d
};
var argument6 = r_0;
var argument7 = {"0":"","7":"","49":"%;c","843":"TeN<W","":"","3.2727391256826944e+307":5.679312903124451e+307,"1.7976931348623157e+308":"`Un","1.6956082207297743e+308":"lh","UU":-1,"2.955397749835582e+307":"$5W"};
var base_0 = ["w","v","B",",","$","<","{","-"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["w","v","B",",","$","<","{","-"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["w","v","B",",","$","<","{","-"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["w","v","B",",","$","<","{","-"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test300.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)