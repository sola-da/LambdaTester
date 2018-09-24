





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.575765443877852e+307] = ""
argument2[3.286160553564105e+307] = 49
base_0[2][2] = ["A","-","0MsIJ"]
return a/b+c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['T'] = ")jn"
return a+b+c/d
};
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['PK4'] = false
argument5[1.4250811791542279e+308] = null
base_2[6] = 8.305260041916832e+307
return a*b-c+d
};
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = [823,655]
argument7[8.575765443877852e+307] = {"122":",;8","":"","5HX":"Y","1.0767313962722832e+308":2.6887736979160754e+307}
return a/b+c-d
};
var argument7 = r_3;
var base_0 = [213,213,242,100,969,655,242,25,49]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,213,242,100,969,655,242,25,49]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,213,242,100,969,655,242,25,49]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,213,242,100,969,655,242,25,49]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test945.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)