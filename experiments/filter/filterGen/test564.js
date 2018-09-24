





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['filter'] = {"1.1834233924530743e+308":1.178866051946627e+308}
base_0[0][4] = true
return a*b+c
};
var argument2 = null;
var argument3 = {"823":"k","":213,"pJP":242};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = ["i","_s","7&3","YI89P)"]
base_1[8][3] = false
argument5['wIs'] = 49
return a*b/c
};
var argument5 = 242;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = false
base_2[0][5e-324] = null
return a*b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][5e-324] = false
argument8['jo'] = true
base_3[1][0] = {"59":627,"82":1.057742752180081e+308,"100":403,"705":9.322471394647743e+307,"":"J^","c":"","6.064087134199414e+307":"","2.5104610558323255e+307":"","5.660616305015799e+307":")]","6.937890002344715e+307":"gv<"}
return a-b-c
};
var argument8 = null;
var argument9 = r_1;
var base_0 = [5e-324,714]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,714]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,714]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test564.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)