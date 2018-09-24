





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['St'] = {"126":"","460":823,"":100,"p":157,"1.7867066391594666e+308":"","PG":"8","c":122,"'o":714}
return a+b/c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = null
argument5[0] = true
argument4[1.1207829086460726e+308] = ""
return a*b-c/d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[9.624051682326797e+306] = {"157":"TL"}
return a-b+c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][3] = "z"
argument8['!j'] = {"122":"x$"}
return a+b+c-d
};
var argument7 = {"213":"zy","843":"","":242,"k":1.5584777004951042e+308,"8.815904311734995e+307":2.2446267012108636e+307};
var base_0 = [59,403,893,0,59,823,5e-324,59,100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,403,893,0,59,823,5e-324,59,100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,403,893,0,59,823,5e-324,59,100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,403,893,0,59,823,5e-324,59,100]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test716.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)