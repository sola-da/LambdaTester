





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = ["u)%e2Q7",">","8Y",1.7976931348623157e+308,"K"]
argument2[7] = true
return a+b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['{S'] = ""
base_1[3] = [-1,126]
return a+b/c-d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][3] = null
base_2[4][3] = null
argument3[1] = {"6.69338392758209e+307":"","":59}
return a-b*c*d
};
var argument4 = "}F";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = true
base_3 = true
return a-b*c*d
};
var argument6 = null;
var argument7 = null;
var base_0 = ["p4N","4","J^","iWD{BT","d&q","MaO","asw","c]09","J#(K"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["p4N","4","J^","iWD{BT","d&q","MaO","asw","c]09","J#(K"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["p4N","4","J^","iWD{BT","d&q","MaO","asw","c]09","J#(K"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["p4N","4","J^","iWD{BT","d&q","MaO","asw","c]09","J#(K"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test104.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)