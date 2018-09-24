





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = true
base_0[1] = null
argument3[126] = 3.8741342707171923e+307
return a/b*c/d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = {"":"*","1.6027172970808698e+307":8.749664229225672e+307}
base_1[2][2] = {"4":705,"595":"Y","":893,"$+P":705,"u":1.0693760843967886e+307}
return a-b/c+d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['K'] = ["w","J","K","{@Y","o","5-","@"]
return a*b*c/d
};
var argument6 = "";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = {"0":595,"[":7.14770173801727e+307,"":1.589852756749253e+308,"1.0333197941352056e+308":49,"1.2800771525840365e+308":9.195209211242952e+307}
argument8[4] = null
return a*b-c-d
};
var base_0 = ["6","t][I","P","P:","*n]6`","P;","nu","Q","1U"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6","t][I","P","P:","*n]6`","P;","nu","Q","1U"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6","t][I","P","P:","*n]6`","P;","nu","Q","1U"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6","t][I","P","P:","*n]6`","P;","nu","Q","1U"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test355.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)