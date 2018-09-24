





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = {"157":969,"242":"(]","618":"m38","627":"<","8.898669833725301e+307":893,"-1":1.7976931348623157e+308,"2.2632526856317457e+307":"KxJH","VqQ(=N":"&","2.5735236237658953e+307":""}
return a-b+c*d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = true
argument4['PK4'] = {"100":"2","595":"","655":"w","843":213,"":"","5.370232740161178e+307":49,"1.7976931348623157e+308":"i"}
return a-b-c-d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[213] = {"82":893,"595":4.926442507324845e+306,"783":122,"843":213,"893":1.763433216848387e+308,"HB+z":4.780762103155558e+307,"v":"Z8","":607,"1.663540899248199e+308":"","1.5584391742352157e+308":"zhn"}
argument4[0] = true
return a-b/c-d
};
var argument5 = r_2;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = null
base_3[1][2] = [-1,843,823]
return a/b/c/d
};
var argument7 = "";
var base_0 = [-100,157,460,49,25]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,157,460,49,25]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,157,460,49,25]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,157,460,49,25]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test876.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)