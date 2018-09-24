





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.4250811791542279e+308] = ""
argument2['PK4'] = 2.4571802199049067e+307
return a/b-c*d
};
var argument2 = null;
var argument3 = [25,823,-1,823];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.5887552427096746e+308] = ["5","m)d","b9","B<9","I","?oieiF"]
argument6[7] = [0,823,157,705,59,122,213,969,618,122]
argument6[783] = [")O"]
return a-b/c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = 7.590743267155535e+307
argument6[627] = {"5.530445082820941e+306":"L","IL[r^G":705,"1.485858074306758e+308":1.3253463407324289e+308,"1.758910087060746e+307":"","UB":1.2441252354593066e+308,"q2i":"","":6.730289538758601e+307}
return a*b+c+d
};
var argument6 = "m";
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['!j'] = "J_u"
argument9[3.8120440085202614e+307] = {"823":"","1.4618782185077324e+308":"","":"g4J%"}
argument9[3.286160553564105e+307] = 595
return a+b-c-d
};
var base_0 = [783,213,157]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,213,157]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,213,157]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,213,157]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test885.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)