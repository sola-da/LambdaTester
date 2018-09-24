





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['v'] = ""
return a-b+c*d
};
var argument2 = {"6.873741452083066e+307":7.112896713610577e+307,"3.9217969160542723e+307":""};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = null
return a+b-c-d
};
var argument4 = {"59":1.4218958654579952e+308,"607":122,"2.2008952105640074e+307":126,"1.7976931348623157e+308":823,"8.765143671065314e+307":627};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][2.819898637310108e+307] = [126,25]
argument6[7] = true
argument7[1] = {"607":"A","5.574717042376873e+307":"BV","uP":"","'g3":2.0814067702021536e+307}
return a-b/c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = 823
return a*b-c*d
};
var argument7 = r_1;
var base_0 = [783,"on0","Y","b!b","`","t","N",460,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"on0","Y","b!b","`","t","N",460,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"on0","Y","b!b","`","t","N",460,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,"on0","Y","b!b","`","t","N",460,893]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test330.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)