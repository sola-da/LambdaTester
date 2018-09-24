





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.921533274132203e+307] = 607
argument2[82] = {"126":"","242":82,"893":705,"969":5.625900116534988e+307,"8.231243937214938e+307":"kO","":"","C[n":5.737275980344535e+307,"T":"%"}
base_0[4][3] = null
return a*b*c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = "q"
base_1[0][0] = true
base_1[1][5] = false
return a-b/c+d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = {"4":403,"213":1.158875775910901e+308,"607":"(","627":1.3246369686603674e+308,"705":"n-","893":1.5799527446130726e+308,"1.0246471769536382e+308":"!","":1.1501225337735661e+308,"5rOC":"Q3wN"}
argument5[8.575765443877852e+307] = true
return a/b*c-d
};
var argument5 = false;
var argument6 = {"25":618,"126":25,"7.84317459227993e+307":"u","":1.3716087095716502e+308,"g":"","9.101462998426412e+305":""};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = "TZB"
return a/b+c/d
};
var base_0 = [0,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test704.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)