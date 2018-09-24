





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = "*"
argument2[2.249941463060761e+307] = null
base_0[2][5e-324] = [100,122,82,126,893,1.7976931348623157e+308]
return a*b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4.224481734419934e+307] = [-1,100,460,100,1.7976931348623157e+308,0,460]
argument5[2] = ""
return a+b-c
};
var argument4 = null;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = [213,0,",z"]
base_2[4][7] = true
return a+b/c
};
var argument7 = r_2;
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = null
argument10[4.224481734419934e+307] = true
base_3[2][5e-324] = [0,823]
return a/b+c
};
var base_0 = [242,82,242,655,893,-100,705,82,-100]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,82,242,655,893,-100,705,82,-100]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,82,242,655,893,-100,705,82,-100]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,82,242,655,893,-100,705,82,-100]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test542.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)