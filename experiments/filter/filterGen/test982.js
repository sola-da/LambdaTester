





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 1.1154494993233094e+308
argument2[6] = ""
argument3[618] = ["G4L","[","vkv","<P",",H=","L","Qt"]
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1]['!cck7Mm']['g'] = ""
argument4[3] = {"":"","1.7558559870873438e+308":627,"1.5911168012068258e+308":"","6.019280973505707e+306":242}
return a*b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = 1.3481608687121645e+308
base_2[2] = ["z",969,714,"+f","e",705,"We","x$sN"]
return a+b*c
};
var argument4 = r_2;
var argument5 = {",p)":"","7.982178786077303e+307":"zl","":0,"7.309203280748562e+307":1.372058377750905e+307};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][1] = false
base_3[9] = null
argument7[7] = [100,-1,460]
return a*b+c
};
var base_0 = [607,25,705,"GzW?"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,25,705,"GzW?"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,25,705,"GzW?"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/filter/filterGen/test982.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)