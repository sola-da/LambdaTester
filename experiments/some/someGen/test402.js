





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = false
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = null
argument2[4] = [82,823,893,714]
base_1[6] = null
return a*b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = null
return a+b-c
};
var argument4 = null;
var argument5 = ["W",403,627,59,705];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = {"82":"","92":1.170040614876174e+308,"":"","`C":"","4.88845335993414e+307":2.5885986945046204e+307,"<(":"eCfnDLJiE","lR":1.22157349492427e+308,"1.559078220923285e+308":"",">l":-100}
argument8[1] = 1.7733320784999906e+308
return a+b-c
};
var argument7 = r_3;
var base_0 = [213,"jc",627,"3","cpN",25,"vx"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,"jc",627,"3","cpN",25,"vx"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,"jc",627,"3","cpN",25,"vx"]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,"jc",627,"3","cpN",25,"vx"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test402.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)