





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {"]jb9":-1,"1.6777556622492539e+308":1.0089583211205334e+308,"1.6119578604373706e+308":"","6#":"","8.236475387289603e+306":"","1.5665399747343429e+308":1.1659860869589554e+308,"M":""}
base_0 = {"655":"q%","705":"","n":7.367020062232671e+306,"7.507525801680503e+307":"9kJ","o":"]","M":9.226252883344053e+307,"w":-1,"":6.540161872352999e+307}
argument3['8('] = false
return a+b+c+d
};
var argument2 = {"":"@8T","7.306899808312866e+307":"9'","=1":1.3696787540379638e+308,"A":"(*"};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1][4] = false
base_1[7] = null
argument4[0] = false
return a-b-c*d
};
var argument4 = false;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.1207829086460726e+308] = 7.00193838070719e+307
return a/b+c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[8.575765443877852e+307] = {"1":"3p","403":"","783":"","1.1457778642957093e+307":1.3950012264429644e+308,"$e6":"","S[":"i","2.279088591175555e+307":627,"":0,"1.3441115938125296e+308":627,"6.910862809860597e+307":1.0345969755508728e+308}
argument8['v'] = ["[",25,"N","SW",783,122,"Gh"]
argument8[-1] = true
return a-b/c-d
};
var argument8 = false;
var base_0 = ["s","j","k","m",";eN","{W%","lH","=!","nhv%","B"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["s","j","k","m",";eN","{W%","lH","=!","nhv%","B"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["s","j","k","m",";eN","{W%","lH","=!","nhv%","B"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["s","j","k","m",";eN","{W%","lH","=!","nhv%","B"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test884.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)