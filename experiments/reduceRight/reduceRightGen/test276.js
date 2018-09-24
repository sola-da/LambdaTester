





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = null
base_0[6] = null
return a+b+c-d
};
var argument2 = 5.573916668599863e+307;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = [213,705]
argument4[2] = null
base_1[2][2.819898637310108e+307] = [655,242]
return a+b/c-d
};
var argument4 = 122;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8.575765443877852e+307] = ["]",25,"ob",-1,"MBA","NU"]
argument7['T'] = ["Wxu","&Gt!","60"]
argument6[5] = ["?_8","tf","wbz","t","Y","I","0$","<H&%a","d"]
return a/b*c+d
};
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.738403780925446e+308] = [25,460,1.7976931348623157e+308,82,1.7976931348623157e+308,82,59,783]
return a-b/c/d
};
var argument8 = 714;
var argument9 = null;
var base_0 = [126,"a","l9"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,"a","l9"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,"a","l9"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,"a","l9"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test276.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)