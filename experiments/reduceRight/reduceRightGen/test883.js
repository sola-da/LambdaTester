





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = ""
base_0[9] = {"4.63860447797663e+307":"kNi8fg","6.676640481782357e+307":1.885372816516543e+307,"6.734345821156661e+307":4.728333616420509e+307,"":783}
argument2[8.108492555774111e+307] = ["N","]",";","fL"]
return a*b*c*d
};
var argument2 = {"969":714,"6.44225273635192e+307":3.6023492927679204e+307,"1.2368690426977826e+307":4.2713399046136844e+307,"":""};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['AwD'] = 6.35670024784291e+306
argument4[3] = null
return a+b+c/d
};
var argument4 = {"82":"","823":"","E":"#","":"p","m":"","5.042864762598531e+307":403,"Yl":3.7014200902923485e+307};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = ["N",627,"?",823,"3",82,655,"f","1"]
return a/b/c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['!j'] = {"6.933134334288842e+307":"","Fug":"","1.7976931348623157e+308":"","":"","1.8614883536479896e+307":1.3467066524164134e+307,"-":"i"}
base_3[7] = "?"
return a-b-c+d
};
var argument7 = true;
var argument8 = null;
var base_0 = ["$+Z","v"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$+Z","v"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$+Z","v"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$+Z","v"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test883.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)