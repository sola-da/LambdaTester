





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = [893,5e-324,100,969,607,460,0,213,783,714]
base_0 = null
return a*b+c/d
};
var argument2 = {"705":242,"1.1735955524648516e+308":"","1.0658110861789657e+308":""};
var argument3 = ["d","j","a","o","5"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['K'] = "_"
argument5[1.1207829086460726e+308] = null
base_1[0][3] = null
return a-b/c+d
};
var argument5 = r_0;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[655] = [82,49,25,59,893,213]
base_2[3] = ";$"
base_2[2][2] = ""
return a-b/c+d
};
var argument8 = ["d","Q","E47","i","^"];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = {"213":"p","1.2186764656557436e+308":"","5.217843515580294e+307":""}
return a*b-c/d
};
var base_0 = [59,59,823,5e-324,242,823,714,59,627]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,59,823,5e-324,242,823,714,59,627]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,59,823,5e-324,242,823,714,59,627]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,59,823,5e-324,242,823,714,59,627]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test447.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)