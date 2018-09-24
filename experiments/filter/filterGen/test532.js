





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = {"2":"rt","48":"x","":655,"1.7976931348623157e+308":618}
argument2[7] = false
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = {"460":"","893":"","!":"","4.065953143384003e+306":"","":1.3284284414706187e+308,"1.2580599348662639e+308":""}
return a-b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = {"100":"$","122":"","627":"","[oM+":1.3251253938776986e+308,"3.0116443102608566e+307":"ZH","":"","l":627,"W":""}
argument4[0] = 1.4929337744976855e+308
return a*b-c
};
var argument4 = [1.7976931348623157e+308,157,460,122,893,705,59];
var argument5 = r_2;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][5e-324] = null
argument7[157] = false
base_3 = ["g","}<Z>","%","Y","(4u:1qH%","*","V@b","H"]
return a-b*c
};
var base_0 = ["&s*","e","]","I","lv(X","7","4","R","V",":"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&s*","e","]","I","lv(X","7","4","R","V",":"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test532.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)