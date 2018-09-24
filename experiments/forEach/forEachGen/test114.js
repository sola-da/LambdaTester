





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = [213,893]
argument1['1SHF1'] = null
return a*b-c
};
var argument2 = {"1.032294220742467e+308":1.065011367525031e+308};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8.748669805137695e+307] = false
argument4[-1] = null
argument5[1] = null
return a/b-c
};
var argument4 = [213,705,126,0,")$Ry","eG","3","|","8"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = {"":122,"1.1046595454799886e+308":"LC","7.648602584564489e+307":1.2913318891959926e+307,"z":"","6.763113890586682e+307":1.5013751603394546e+308,"v":"G+Ft-d"}
return a/b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][1] = {"213":4.06065835296461e+307,"":")","sl4ma":"","U":893,"1.5080089121973847e+308":-100}
base_3[6] = ""
argument7[1] = 100
return a*b-c
};
var argument7 = r_2;
var base_0 = ["k8ppc","n","4",")&"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["k8ppc","n","4",")&"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["k8ppc","n","4",")&"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["k8ppc","n","4",")&"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test114.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)