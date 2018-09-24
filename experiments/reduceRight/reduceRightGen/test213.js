





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = {"403":"V","618":1.5388670536382877e+307,"1.5244247008950624e+308":"o5"}
argument3[6] = [82,714,618,705,242]
base_0[7] = null
return a+b-c/d
};
var argument2 = "-t<{sP";
var argument3 = 607;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = true
argument5[6] = null
base_1[8] = [100,59,627,969,213,627]
return a+b-c*d
};
var argument5 = r_1;
var argument6 = 100;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = "!X<(B"
return a*b-c/d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = "9"
argument9[1] = 82
argument10[6] = 242
return a+b/c+d
};
var argument9 = r_3;
var argument10 = {"627":"","T":82,"":893,"1.795042430955286e+308":"","X":607,"e":"","6.758020978857776e+307":"","8.58858257404841e+307":"","M":969};
var base_0 = [82,714,-1,655,893,893,213,126,655]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,714,-1,655,893,893,213,126,655]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,714,-1,655,893,893,213,126,655]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,714,-1,655,893,893,213,126,655]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test213.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)