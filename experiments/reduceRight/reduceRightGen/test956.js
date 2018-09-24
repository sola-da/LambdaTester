





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = [122,157,969,607,705,714,705,783,242,823]
argument2['T'] = true
return a+b/c+d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.5887552427096746e+308] = ""
argument4['T'] = null
base_1 = -1
return a*b*c*d
};
var argument4 = false;
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = [5e-324,"<|U6Xvm","e","X|"]
argument7[1.7071986534150335e+308] = null
return a+b-c-d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.4250811791542279e+308] = {"3":213,"":"","9.240116893960882e+307":607,"2.654948828031744e+307":1.4708808680667617e+308,"6.110196863102702e+307":""}
argument8['K'] = null
return a-b+c/d
};
var argument8 = false;
var base_0 = ["j","77","_","3","G","3","K","Fjb^","J"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j","77","_","3","G","3","K","Fjb^","J"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j","77","_","3","G","3","K","Fjb^","J"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j","77","_","3","G","3","K","Fjb^","J"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test956.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)