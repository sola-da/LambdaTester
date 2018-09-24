





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"627":1.0816677423920863e+308,"655":"#","":823,"^s":1.6747728325755965e+308}
argument3[4] = ["V","[","i","A","dcN","E"]
return a*b+c/d
};
var argument2 = null;
var argument3 = [714,1.7976931348623157e+308,823,242,607,705,5e-324,627,49];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = true
return a+b+c+d
};
var argument5 = 126;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = 1.1484786045759125e+308
base_2[1][5] = null
return a/b/c*d
};
var argument8 = "@";
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = {"s":"","!":-100,"":595,"8.713582986562207e+307":9.11450434539823e+307}
base_3 = null
argument11[8] = {"618":-1,"V]|h":"%","l+O":"%Ey","N0":"e#","_":"","":-1}
return a*b-c+d
};
var argument10 = r_2;
var argument11 = r_2;
var base_0 = [213,82,627]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,82,627]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,82,627]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,82,627]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test625.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)