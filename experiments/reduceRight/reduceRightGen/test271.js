





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['v'] = {"627":1.2919816358535927e+308,"N":"","hJO<m:":1.5661057543339627e+308,"5.630136372762921e+307":705,"":9.913324905943402e+307,"1o":"","I":82}
argument2['K'] = ""
return a*b-c*d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = 7.490139474440885e+307
base_1[6] = 403
argument4[4] = ""
return a/b/c-d
};
var argument4 = {"":1.636300746978551e+308,"1.7976931348623157e+308":714,"1.2105379463527023e+308":7.995026250490616e+307,";G":6.957034319404633e+307};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = [607]
argument6['K'] = ""
return a-b-c/d
};
var argument6 = 1.3987741772154632e+308;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[6] = false
return a-b-c+d
};
var base_0 = [403,969]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,969]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,969]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,969]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test271.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)