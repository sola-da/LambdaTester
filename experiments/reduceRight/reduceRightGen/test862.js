





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = ["Ol95","<","&","m","m@U"]
return a/b-c/d
};
var argument2 = {"823":9.72028472427838e+307,"":2.3342453912437034e+307,"1.046921915007314e+308":"h>}s","1.31123111571645e+308":1.066836279728728e+308,"1.7043463135127798e+307":25,"2.9920203976969037e+307":5.450464568088014e+307};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['!j'] = {"59":"","607":"YE","655":"+02","1.7976931348623157e+308":1.3946682348946285e+308,"":714,"@V":"","B":1.7976931348623157e+308,"*(L":100,"1.12841505959483e+307":"","xk":""}
return a-b*c/d
};
var argument4 = "";
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = 1.3815158462234714e+307
return a+b+c*d
};
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = null
argument9[8] = null
argument9[1.738403780925446e+308] = 8.668127298628658e+306
return a-b*c*d
};
var base_0 = ["z",969,82,"e0","^"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z",969,82,"e0","^"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z",969,82,"e0","^"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z",969,82,"e0","^"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test862.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)