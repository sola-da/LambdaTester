





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = 655
return a-b+c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = ""
return a*b+c/d
};
var argument3 = false;
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = 1.5803823499275743e+308
argument7[6] = {"157":"zi","607":893,"":1.6341327982811353e+307,"1.7297490919980757e+308":"H","4.66345029630422e+307":"4","1.0785714984121495e+308":"","5;ig":969,"H":1.5348759895509047e+308,"#":""}
argument6[82] = ["h","WQ","O5","@o,","^m","pbA"]
return a*b*c/d
};
var argument6 = {"100":9.603001801809452e+307,"122":893,"213":3.612539681431712e+307,"823":8.625881296167539e+307,"1.0932416185064998e+307":714,"":"b!r","7.575893632183418e+307":893};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][2.819898637310108e+307] = 5.412109333616191e+307
return a+b*c*d
};
var base_0 = [-100,595,595,126,655]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,595,595,126,655]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,595,595,126,655]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,595,595,126,655]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test563.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)