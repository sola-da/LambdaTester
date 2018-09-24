





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][2.819898637310108e+307] = null
return a+b/c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = "*"
argument3[3.8120440085202614e+307] = {"403":"V","zp'":714,"":1.4744166731512243e+308,"6.106612687978782e+306":"","|":"3D","d":823,"1.3432939283903954e+308":1.3656478836686215e+308}
return a*b*c-d
};
var argument3 = 213;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = 4.3558376015029845e+307
base_2[1] = null
return a-b/c/d
};
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = 9.203043301048724e+307
argument8[8.575765443877852e+307] = {"0":2.898843959744583e+307,"82":49,"157":1.5663088959992427e+306,"627":"+","1.502378480797836e+308":49,"5e-324":5.383445307900355e+307,"":1.2694682805808457e+307,"#M":"","1.4689062777423582e+308":""}
argument9[1] = null
return a-b-c*d
};
var argument8 = r_3;
var argument9 = true;
var base_0 = ["m_j","c","+","`","bs!"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["m_j","c","+","`","bs!"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["m_j","c","+","`","bs!"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m_j","c","+","`","bs!"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test550.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)