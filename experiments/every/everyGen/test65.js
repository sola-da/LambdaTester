





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = "&!"
return a*b*c
};
var argument2 = "";
var argument3 = {"7":"!","157":"","714":157,"":"'A","j":"","2.970295762663093e+307":"wH","ZX":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {"8":-1,"122":-1,"783":"]","O+1":893,"O":""}
base_1[3] = [705,126,403,5e-324]
base_1[9] = [714,100,1.7976931348623157e+308,893,403,843]
return a*b-c
};
var argument5 = {"4":969,"595":783,"I(":"8-O=","1.082150339279095e+308":705,"":"o","P":2.4071910492280717e+307};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.3156198695370476e+307] = ["Jua","8","J7-","(o","s","ztc","Hsf$p","Y","_MbN"]
argument7[3.3156198695370476e+307] = {"100":"`r8[B","126":"L","1.0013939691057887e+308":"}","jM|":"nL(","":783,"2.7292855913263713e+307":"$m","Q":"","9.981122214369923e+307":157}
return a+b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = null
base_3['length'] = ""
return a+b+c
};
var argument8 = r_3;
var base_0 = [122,460,969,893,100,893,82,157,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,460,969,893,100,893,82,157,893]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,460,969,893,100,893,82,157,893]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,460,969,893,100,893,82,157,893]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test65.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)