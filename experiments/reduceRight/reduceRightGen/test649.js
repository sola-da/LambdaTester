





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['w'] = "N7&Zp"
argument3[1.4250811791542279e+308] = {"A{":59}
argument3['UU'] = null
return a*b*c*d
};
var argument2 = null;
var argument3 = {"126":5.886953368939646e+307,"823":7.477669602007243e+306,"Od":1.1205709199516552e+308,"":1.2675363159302145e+308,"3.4170635696140196e+307":"j","1!":"","(yG":705,"1.0695829659520655e+308":843};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = 4.81510249915608e+307
argument5[1.4250811791542279e+308] = ";c"
return a/b-c*d
};
var argument5 = "ua";
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = ""
argument8[8.575765443877852e+307] = 1.173212859319816e+308
argument8[6] = true
return a-b-c-d
};
var argument8 = {"49":1.4427160085342072e+308,"893":"","1.7976931348623157e+308":"Y3","5e-324":"=S}","5.894244958909203e+307":893,"1.4402897017996946e+308":1.100436138062296e+308,"p":"","D":403,"-1":0};
var argument9 = true;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[3.286160553564105e+307] = [-100,242,1.7976931348623157e+308]
base_3[6][2] = ["{","`v","Vu!L","QZ","ct"]
argument11[5] = {"":893,"e":"*F>i","9.646181303078581e+307":"IUMc","2.1855061176703655e+307":""}
return a+b-c+d
};
var argument11 = r_2;
var base_0 = ["+ $Y","e2","-","H","Q","R","%Y","d","7P"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+ $Y","e2","-","H","Q","R","%Y","d","7P"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+ $Y","e2","-","H","Q","R","%Y","d","7P"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+ $Y","e2","-","H","Q","R","%Y","d","7P"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test649.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)