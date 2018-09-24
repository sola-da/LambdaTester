





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = {}
argument2[6] = 213
argument2[8.575765443877852e+307] = ["_",714,"PL","[",893,"F<",655,460,823]
return a-b*c+d
};
var argument2 = 25;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.1207829086460726e+308] = null
argument4[82] = {"82":"E","595":7.558338682120959e+306,"":969,"1.6320090061835693e+308":"","L:M":""}
argument3[0] = {"M":0,"1.58134800974498e+308":""}
return a+b+c+d
};
var argument4 = "B";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['w'] = {"":4.1482339869701305e+307}
return a/b/c*d
};
var argument6 = [627,595,82,-1,82,59,969,655];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = "]"
return a+b/c/d
};
var argument8 = r_3;
var base_0 = [1.7976931348623157e+308,893,627,25,893,59,783]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,893,627,25,893,59,783]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,893,627,25,893,59,783]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,893,627,25,893,59,783]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test615.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)