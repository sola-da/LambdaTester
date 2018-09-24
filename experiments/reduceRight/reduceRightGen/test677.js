





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['a'] = {"100":242,"595":"w","":"3","1.0865393937019784e+308":6.809372615159445e+307,"2.4743578143388917e+307":1.6296856827698392e+308,"1.7511317513013251e+308":1.6387309732655129e+308}
return a*b*c/d
};
var argument2 = [783,")RZ","$tx","a",823,"C"];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][5] = 1.0880028224623891e+308
argument4[3.8120440085202614e+307] = true
return a+b*c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][2] = true
argument6[8] = {"25":"","1.775206595900278e+308":"<","":"","1.7920735092160647e+308":"[=_","1.0243445909253945e+308":"","2)J":":","2.6611114410330155e+307":""}
return a*b+c/d
};
var argument5 = {"4.255294604624472e+307":-100,"1.5690116573747888e+308":7.499105561396426e+307,"":"942O]erm"};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = null
argument7[25] = 1.518653309817878e+308
return a*b+c/d
};
var argument7 = {"843":"*"};
var base_0 = [1.7976931348623157e+308,"C-","w",595,607,"Y","4a","t]Kh"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"C-","w",595,607,"Y","4a","t]Kh"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"C-","w",595,607,"Y","4a","t]Kh"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,"C-","w",595,607,"Y","4a","t]Kh"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test677.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)