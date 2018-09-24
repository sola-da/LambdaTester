





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {"100":":","(":"","u;":"","":"","w1":1.3127894897113395e+308}
return a*b/c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][2] = true
argument4[0] = [100,82,618,607,242]
argument4[4] = true
return a-b*c+d
};
var argument3 = {"100":6.714342175168815e+307,"1.1747662830077309e+308":1.7009349548149635e+308,"":5.362990998961199e+307,"]n":"","1.7976931348623157e+308":""};
var argument4 = {};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = ["y",627,"?k",122,-100,157,"{sm",213]
base_2[1] = {"655":"t","":823}
argument6[6] = [100,783,607,618,-1,82,242,783,969]
return a/b*c-d
};
var argument6 = "Pr";
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6] = [157]
argument9[7] = [714]
return a-b-c-d
};
var argument9 = r_1;
var argument10 = [126];
var base_0 = ["[","r ","zN","]mz"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[","r ","zN","]mz"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[","r ","zN","]mz"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[","r ","zN","]mz"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test231.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)