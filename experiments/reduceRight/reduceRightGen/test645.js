





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.738403780925446e+308] = {"59":2.4828883175845385e+307,"122":6.654653608606471e+305,"509":"","705":"X","rx!":""}
return a+b-c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][5] = [-100,893,618,-100,893,213]
argument3['L'] = 1.3617530113374965e+307
return a/b*c-d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.921533274132203e+307] = [893,969,1.7976931348623157e+308,969,49,59]
argument5[0] = "t"
argument4[1.921533274132203e+307] = 1.5795280775972628e+308
return a+b+c+d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][2.819898637310108e+307] = false
argument7[1][4] = 893
argument6['K'] = 9.257749464266435e+307
return a+b+c+d
};
var base_0 = [627,82,"WQpZ"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,82,"WQpZ"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,82,"WQpZ"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,82,"WQpZ"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test645.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)