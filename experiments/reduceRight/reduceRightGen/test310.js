





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = null
return a+b*c/d
};
var argument2 = ["`","Q","t","`","y","O:S","BB^$>-"];
var argument3 = {"655":-1};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[25] = true
return a+b+c+d
};
var argument5 = null;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = ["dh","h*X2","(c"]
argument8['w'] = 1.7341189096182924e+308
argument9[1] = {"49":"o","V":1.7849528158346844e+307,"P9":1.5344866973178681e+308,"1.7360496737788803e+308":"","_":2.1561845507200056e+307,"1.1818306555670082e+308":"","":893,"T":"","1.3180951791069857e+308":9.500268941140676e+307}
return a-b+c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['y'] = 783
return a-b-c+d
};
var base_0 = [-1,655,403,655,403,705,595,655,607]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,655,403,655,403,705,595,655,607]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,655,403,655,403,705,595,655,607]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,655,403,655,403,705,595,655,607]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test310.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)