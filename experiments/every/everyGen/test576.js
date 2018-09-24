





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = false
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[122] = {"1V":"","0{":1.3631700832102302e+308}
return a+b+c
};
var argument3 = r_1;
var argument4 = 7.877748812206278e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.9097830510613482e+307] = null
base_2[1] = {"6.93083376246473e+307":157,"YI":8.104013240331916e+307}
base_2[9] = ""
return a/b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[122] = [59,126,893]
argument8[5] = true
argument7[1] = {"2":126,"49":100,"213":"$","<CC,":460,"P":" ","|":"","=:":5e-324,"-1":"Q","":"0'"}
return a/b*c
};
var argument7 = r_3;
var argument8 = {"0":"","49":"_j8","705":1.2919322198366426e+308,"I":"","":""};
var base_0 = [126,-100,100,"@",607,"ds",-1,"-bbB4",843,714]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,-100,100,"@",607,"ds",-1,"-bbB4",843,714]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,-100,100,"@",607,"ds",-1,"-bbB4",843,714]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,-100,100,"@",607,"ds",-1,"-bbB4",843,714]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test576.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)