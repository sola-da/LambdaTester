





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {"4":"","59":2.5175129962984936e+307,"157":"]","":"","7.970713238389835e+307":8.594402437432404e+307,"1.5355982435705995e+308":">'i","6.635500126601379e+307":7.449915336269174e+307,"1.7976931348623157e+308":5.348127530625511e+307,"?":4.835256638599211e+307}
argument1 = [893,122]
return a*b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = null
argument2 = 1.16366376618289e+307
return a-b/c-d
};
var argument3 = false;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = ["Hv","+[","8h}","=","W","(","E","5","`",",!)zq"]
base_2[8] = {"1.5506627560978461e+308":")","YP":"","1.2024557613506655e+308":969,"":627,"8.162547364380523e+307":403,"7.711553861403945e+307":"c","1.3348683679650602e+308":1.6707445423279274e+308}
return a*b-c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = true
base_3[3] = 893
base_3['length'] = {"t":1.4405445347534e+308,"":"8o"}
return a-b+c/d
};
var argument7 = false;
var argument8 = false;
var base_0 = [607,"%6N}i",122,969,"?W2","(",0,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,"%6N}i",122,969,"?W2","(",0,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,"%6N}i",122,969,"?W2","(",0,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,"%6N}i",122,969,"?W2","(",0,82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test13.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)