





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = 5.349469099630023e+307
return a+b+c-d
};
var argument2 = false;
var argument3 = 1.6859771317262708e+308;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = ""
base_1[2] = ["6)pO"]
argument5[5] = 242
return a/b-c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['a'] = {"122":"_","1.2734934427883492e+308":1.7976931348623157e+308,"":"}^!_","3.18329223966794e+307":""}
base_2[3] = {"49":"m","1.1035173788979862e+308":"","=":893,"|P":"Pik","1.231652287010167e+307":-1,"":"G_XQnwk2","-1":"","+F":""}
return a+b*c-d
};
var argument6 = r_2;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = false
base_3[1] = ""
argument10[2] = [893,242,655,5e-324,655,5e-324,213]
return a+b/c*d
};
var base_0 = ["z","@)"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z","@)"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z","@)"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test632.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)