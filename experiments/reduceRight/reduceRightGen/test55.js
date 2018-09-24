





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = 1.7976931348623157e+308
argument2[1] = null
base_0[5] = {"59":"","":403,"7.065445933557627e+307":"n33-Z"}
return a+b-c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = 1.1275090827334763e+308
argument3['{S'] = false
base_1[0][0] = "p,C="
return a+b*c+d
};
var argument3 = "";
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"126":"","655":49,"783":"","823":"","":969,"7.898987986952965e+307":"Uc0d","3.7461300985629674e+307":"","-1":"C","Tt":"i"}
base_2[1] = {"783":8.97768001600169e+307,"2.746181093833225e+306":"","1.7185022844761307e+308":""}
return a+b+c+d
};
var argument6 = r_1;
var argument7 = 705;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = [969,"V","O",595]
return a+b/c/d
};
var argument9 = 460;
var argument10 = r_3;
var base_0 = ["j","D6","qq","Z2y"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j","D6","qq","Z2y"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j","D6","qq","Z2y"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j","D6","qq","Z2y"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test55.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)