





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {"100":"","607":1.6551820204929702e+308,"1.0176181279961711e+307":1.4287375373068032e+308,"1.5976021900968378e+307":"","4jw":"","":","}
return a*b-c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = null
base_1[0][6] = false
base_1[8][0] = [403,783,969,893,1.7976931348623157e+308,122,-1,213,893]
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = 6.43529113929509e+307
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = {"893":1.1485996393056065e+307,"1.6558814271472276e+308":618,"e":627,"":1.5826838504206e+308,"a9":1.6484986209115076e+308,"1.2689900512686545e+308":2.3115648300862423e+307,"1.3865972285760502e+308":"a"}
argument7[0] = [655,714,893,-1,"w"]
base_3[8][0] = 5.482519167263734e+307
return a-b-c
};
var argument7 = null;
var base_0 = [126,969,82,5e-324,59,655,705,0]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,969,82,5e-324,59,655,705,0]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,969,82,5e-324,59,655,705,0]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,969,82,5e-324,59,655,705,0]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test114.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)