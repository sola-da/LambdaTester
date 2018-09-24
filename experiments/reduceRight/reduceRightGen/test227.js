





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['K'] = {"122":1.1237895122798981e+308,"460":"IB","1.5412529184609694e+308":-1,"2.5253284791563693e+307":618,"?5":"","":9.924989449515364e+307,"o":655}
base_0[0] = ""
return a*b-c*d
};
var argument2 = {"595":-100,"627":0,"1.738403780925446e+308":"","2.4946946131203407e+307":595,"O":"","":"&(","2.7228921195141495e+307":""};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.738403780925446e+308] = {"403":823,"655":893,"893":1.5929381570285098e+308,"":"","6.110050681098983e+307":"x","3.012078760003689e+306":"V","(":"","p=":"e&"}
argument6[-1] = false
return a*b/c*d
};
var argument5 = r_0;
var argument6 = [213,403,705,126,607,25,25];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = true
return a/b+c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[4] = null
argument10[4] = [",","G"]
base_3[2] = null
return a*b/c*d
};
var base_0 = ["(o","l"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(o","l"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(o","l"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(o","l"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test227.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)