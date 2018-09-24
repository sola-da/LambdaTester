





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = true
return a+b*c/d
};
var argument2 = 157;
var argument3 = [618,122,1.7976931348623157e+308,618,0];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = false
argument5['w'] = {"49":"4","607":655,"1.2719213290976613e+308":"5t","T":2.422987253516084e+307,"1.0649197166996984e+308":"","q6":5.27992102485277e+307}
return a/b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = 403
return a+b*c/d
};
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['w'] = ""
base_3[7] = ["Z","STc","i","u",":",403,")","H","e-"]
argument8[0] = {"":714,"T8x":"^0"}
return a*b+c*d
};
var argument8 = {"4.991694439636766e+307":1.5797295820828267e+308};
var base_0 = [122,-100,126]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,-100,126]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,-100,126]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,-100,126]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test52.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)