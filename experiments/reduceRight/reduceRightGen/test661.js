





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 1.5758547503976747e+308
return a*b+c*d
};
var argument2 = r_0;
var argument3 = [823,595,618,618,242];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = true
return a*b*c+d
};
var argument5 = {"0":"","213":4.273959636589443e+307,"893":"","}":"","1.0757779751393317e+308":"","2.400324396028558e+307":714,"1.832060785626497e+307":1.1945329604829922e+308,"":1.370369415709412e+306,"2.6323744499367724e+307":""};
var argument6 = r_0;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = {"460":"2","627":25,"":-1,"=":714,":":705,"1.7613354102348076e+308":714,"2.084147905666802e+307":"!","6.32061962197194e+307":"","m":"**p%","WO":8.324225060469998e+307}
base_2[4][3] = 893
argument8['a'] = "]F"
return a+b*c*d
};
var argument8 = "1";
var argument9 = r_0;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[-1] = null
return a/b/c/d
};
var base_0 = [5e-324,"k(!"," vQ<"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,"k(!"," vQ<"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,"k(!"," vQ<"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,"k(!"," vQ<"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test661.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)