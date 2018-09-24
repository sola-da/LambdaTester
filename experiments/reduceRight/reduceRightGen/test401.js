





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6][2] = ""
return a-b/c*d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.738403780925446e+308] = {"4.478031102067741e+307":"V4","":"C"}
base_1['length'] = 607
return a*b/c/d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['K'] = {"5":"YJe","607":"","1.9668195203309692e+307":213,"":8.657043393713091e+307,"8.499490626669039e+307":3.409756598652213e+307}
argument5[0] = "BN)EZ"
argument7[3] = {"157":5e-324,"":1.7976931348623157e+308,"1.6898830055064489e+308":"v'+f4","2.448277581873905e+306":627,"b":"p]","1.4658897506100708e+308":"Q"}
return a*b-c/d
};
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['K'] = 9.87718641611542e+307
argument9[6] = [655,0,242,213,714,157]
return a*b+c*d
};
var base_0 = [783,705,100,1.7976931348623157e+308,-1,0,59,59]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,705,100,1.7976931348623157e+308,-1,0,59,59]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,705,100,1.7976931348623157e+308,-1,0,59,59]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,705,100,1.7976931348623157e+308,-1,0,59,59]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test401.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)