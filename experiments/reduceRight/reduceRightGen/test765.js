





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.5887552427096746e+308] = "u"
argument3[126] = true
argument3['!j'] = [-1,25,627,122]
return a*b+c+d
};
var argument2 = {"823":"","843":8.096536438026831e+307,"893":1.1912770837537691e+308,"'":607,"":"","8.778364932994004e+307":"","1.2592705175795381e+308":1.6410468137656976e+308};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['K'] = 1.3436336785949262e+308
argument5['y'] = null
base_1[6] = null
return a-b+c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.8120440085202614e+307] = ["D[`",893,"_","j",618,893,82,"2DhzezP","Ri`","zv"]
argument7[1][4] = true
base_2[1][2] = {"":"","4.1363472574202606e+307":1.4827179202663585e+307}
return a*b+c*d
};
var argument6 = [714,49,655,893,843,969,618,823];
var argument7 = {"25":"","242":2.6452415554090475e+307,"K>i":"Uk","":9.884777161077073e+307,"M":7.531695327766199e+307,"!'As":":w","d":843,"j":607,"1.171811120372335e+308":"8ke","1.0920454768759994e+308":"-"};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = 460
return a+b*c-d
};
var argument9 = false;
var base_0 = [595,"n",705,213,100,705,"9K","_"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"n",705,213,100,705,"9K","_"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"n",705,213,100,705,"9K","_"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"n",705,213,100,705,"9K","_"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test765.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)