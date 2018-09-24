





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['F2nCX>6'] = {"0":242,"607":"m","783":595,"'n":"","8.149369793329091e+306":"","9.807402158660984e+307":"7","":1.446599587843303e+308,"1.653879630867753e+308":"y","q":607,"U%":"d"}
argument2['^N'] = ["Rr","Aj","N@!","o","-5=","p","jK<mj"]
return a*b-c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = null
argument3[1] = {"25":"","403":714,"618":59,"":"VV1@z","[o&<":823,"sO":1.6369611182407262e+308,"4.796857440881667e+307":6.502633184939549e+307,"6j":"w]@' {q","pP=N":59,"dx":"h"}
return a*b-c*d
};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['St'] = {"823":82}
return a/b*c+d
};
var argument5 = "t";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[705] = {"8":1.1655515911488824e+308,"893":"","RHN":"","4.747009863327026e+307":49,"1.1321487819509945e+308":1.6849562155149822e+308,"":"","(]":"","I=":9.076779842012696e+306}
argument8[8] = 823
return a+b-c/d
};
var argument7 = null;
var argument8 = r_3;
var base_0 = [157,100,705,-100,59,627]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,100,705,-100,59,627]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,100,705,-100,59,627]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,100,705,-100,59,627]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test669.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)