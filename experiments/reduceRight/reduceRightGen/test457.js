





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = 2.9106210423336484e+307
return a/b*c/d
};
var argument2 = {"126":"","627":"7s","705":"","O":1.1216596272242939e+308,"":"c","2.6280010864357756e+307":"n","W":1.7152304457195407e+308,"1.596680060796237e+308":"D"};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['^N'] = null
base_1 = true
return a/b-c-d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.8120440085202614e+307] = [59]
argument5[3] = {"595":"P","3.9495275841447965e+307":"V","7.349595531044098e+307":"=","1.1789342318336913e+308":1.0446313380579697e+308}
argument5['^N'] = null
return a/b-c+d
};
var argument5 = null;
var argument6 = "";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = true
argument8[627] = 7.087176784230891e+307
base_3[0] = 2.247669866312549e+304
return a+b/c*d
};
var argument8 = ",";
var argument9 = r_0;
var base_0 = ["5H","NP","m","TO`","A","m","-<=","R"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5H","NP","m","TO`","A","m","-<=","R"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5H","NP","m","TO`","A","m","-<=","R"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5H","NP","m","TO`","A","m","-<=","R"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test457.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)