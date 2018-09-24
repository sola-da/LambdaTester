





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = 2.426823165799256e+307
argument2[82] = {"82":"&","157":1.0331432547889894e+308,"595":"","893":3.6833187778928575e+307,"1.0557603637083907e+307":"","1.476141382221508e+308":"j","3Z@":"|","1.1404705851352103e+308":-1}
argument2[2] = 126
return a/b+c*d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6][2] = [0]
return a-b+c-d
};
var argument4 = true;
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9.624051682326797e+306] = 4.6533355504881794e+306
argument7[8] = {"":82,"1.6545196329426392e+308":"<"}
return a*b/c/d
};
var argument7 = null;
var argument8 = 607;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['!j'] = null
argument10['v'] = false
return a-b+c/d
};
var argument10 = true;
var argument11 = r_1;
var base_0 = [-1,595,213,242]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,595,213,242]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,595,213,242]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,595,213,242]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test999.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)