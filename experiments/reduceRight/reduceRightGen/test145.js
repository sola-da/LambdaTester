





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['{S'] = "+"
argument2['{S'] = {"59":"","J3":"D","":"t","N":1.0364904167393744e+308,"6.458824692350761e+307":25,"1.5871414587560982e+308":"","5.567868593008714e+307":7.015785779997418e+307,"7.994445146835088e+307":"km"}
base_0[7] = null
return a*b+c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][3] = {"1.3630278062596106e+308":157}
return a/b*c+d
};
var argument3 = true;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = null
base_2[1] = {"213":7.284753203796583e+307,"":"I","-1":"","5.332073863410647e+307":"","G":"","1.547073342497813e+308":""}
return a/b/c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = {"157":"G","823":6.415799832835954e+307,"7.877436048858205e+307":1.5581547027328272e+308,"9.85940802023135e+307":126,"i95":"S+p","Apo":9.051335159139241e+307,"K":5.094771876806349e+307,"-1":460,"1.7225810522066861e+308":"","TD":"n"}
argument8 = {"0":618,"2":1.5568339981560538e+307,"9.26926146601662e+307":893,"5.535575564951989e+307":"","1.1180539140173241e+308":823}
base_3[3] = true
return a-b*c/d
};
var argument7 = r_2;
var base_0 = [705,969,"K","8",783]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,969,"K","8",783]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,969,"K","8",783]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,969,"K","8",783]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test145.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)