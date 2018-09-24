





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.108492555774111e+307] = 213
return a+b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][2] = {"705":"","4.7162959698809974e+306":"","":1.7583184925893746e+308,"1.7796705461753564e+308":82,"p!)":"","ba":"48","3.7734290775742293e+307":893,"Nc&NXI":"s"}
argument4[3] = true
return a/b*c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8.575765443877852e+307] = false
argument4[1.921533274132203e+307] = null
return a/b+c*d
};
var argument4 = true;
var argument5 = {"126":"+F","705":5.628578435050268e+307,"":627,"1.1800415303324484e+308":",","s":"","N":1.2825530849524448e+308,"h]":"","6.350847897633278e+307":5.667366834357572e+307};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = ""
return a+b+c+d
};
var base_0 = ["9","FgT","E*6","!",655,783,"2pK",460,-1]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9","FgT","E*6","!",655,783,"2pK",460,-1]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9","FgT","E*6","!",655,783,"2pK",460,-1]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9","FgT","E*6","!",655,783,"2pK",460,-1]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test727.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)