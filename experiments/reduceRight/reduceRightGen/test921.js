





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = 100
argument2['AwD'] = 969
base_0[0][2] = ""
return a*b+c-d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = 7.399935496007159e+307
argument4['St'] = null
return a-b+c-d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.286160553564105e+307] = [705,25,783,122,122,122]
argument5[0] = "J=z"
argument5[-1] = "+|Ht^[T"
return a/b/c*d
};
var argument5 = 618;
var argument6 = {"59":"","126":"NB^","714":6.167495741582577e+307,"":"I","-1":1.579894320004838e+307,"4.917789095193968e+307":1.5401396322682525e+308,"1.0429198327527901e+308":"t"};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[655] = ["KjqCpq","l",627,"qt5",25]
return a*b+c/d
};
var argument8 = false;
var argument9 = 3.926961544501699e+306;
var base_0 = ["0m*",";Z%X","IB|","1*","7ZR_","a","PYv","bkx","*?l"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0m*",";Z%X","IB|","1*","7ZR_","a","PYv","bkx","*?l"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0m*",";Z%X","IB|","1*","7ZR_","a","PYv","bkx","*?l"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0m*",";Z%X","IB|","1*","7ZR_","a","PYv","bkx","*?l"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test921.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)