





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[655] = {"6":"","122":"","V":618}
argument3['!j'] = {"82":"a<"}
return a-b-c*d
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8] = "3"
argument5['v'] = null
return a/b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.4250811791542279e+308] = null
return a+b/c-d
};
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.8120440085202614e+307] = 9.57026778741249e+307
argument8[8.575765443877852e+307] = null
argument9[126] = ["j","#","i"," (","j","L","f","`{V",";"]
return a*b-c*d
};
var argument8 = false;
var argument9 = null;
var base_0 = [893,460,-1]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,460,-1]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,460,-1]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,460,-1]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test556.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)