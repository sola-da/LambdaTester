





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = {"100":2.2720418089768603e+307,"1.7976931348623157e+308":"H@","Rf":126}
return a/b+c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = ""
return a+b+c-d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[655] = 1.7976931348623157e+308
return a*b*c*d
};
var argument4 = r_2;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = true
argument6[5] = false
return a+b*c/d
};
var argument6 = 8.399067403365116e+306;
var base_0 = [213,213]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,213]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,213]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,213]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test994.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)