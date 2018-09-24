





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.575765443877852e+307] = false
argument3[7] = ["t","C","pN"]
return a*b/c/d
};
var argument2 = r_0;
var argument3 = {"6":"","595":893,"893":1.5158168841420183e+308,"969":"","":"+F","8.116558975081051e+307":"","4.1011764257273306e+307":"","1.0193696122332925e+308":403,"R-t=":1.5526099852632742e+308,"1.7799924862796805e+308":714};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = null
argument5[8.108492555774111e+307] = true
return a/b-c*d
};
var argument5 = [714,122];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = "Y"
base_2[7] = false
return a-b/c-d
};
var argument7 = null;
var argument8 = [100,460,59];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['UU'] = null
argument11[783] = {"122":"p","1.0400203867922568e+308":1.7561321144858234e+308}
argument10[2] = {"595":"J","655":1.6828125659484706e+308,"705":157,"843":1.229248499305623e+308,"":"Q","[]":"p","3N$X":",9ij"}
return a-b*c/d
};
var base_0 = [100,705,403,0,607,460]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,705,403,0,607,460]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,705,403,0,607,460]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,705,403,0,607,460]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test801.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)