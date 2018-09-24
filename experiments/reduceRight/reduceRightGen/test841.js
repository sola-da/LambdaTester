





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = {"59":"","969":"[=","":1.215337514808018e+308,"R":"","1.0682864623843772e+308":"1","8.201148054767973e+307":"Z'","!":";*","o":"Tw"}
return a*b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = {"0":126,"100":"","":"","1.7840280555182433e+308":1.2177830350094394e+308}
argument3['St'] = 7.537662871828315e+306
argument3[9.624051682326797e+306] = 1.0619113709436555e+308
return a-b/c-d
};
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][2] = {"714":"OV*","":595,"0?":""}
argument5[213] = ""
return a-b-c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['PK4'] = "u"
base_3[4] = -1
return a*b-c*d
};
var argument6 = null;
var base_0 = ["3","N8","K!{","x",":","jS","Z","z","ivRu"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3","N8","K!{","x",":","jS","Z","z","ivRu"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3","N8","K!{","x",":","jS","Z","z","ivRu"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3","N8","K!{","x",":","jS","Z","z","ivRu"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test841.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)