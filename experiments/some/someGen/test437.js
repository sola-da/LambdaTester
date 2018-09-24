





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = false
argument2[705] = ""
base_0[3][6] = {"705":5.539483138062152e+307,"5.303095301469932e+307":82,"":""}
return a+b/c
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.249941463060761e+307] = null
argument5['f!BO'] = true
base_1[1]['{X'] = false
return a/b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = [0,705,893,-1,25,655,618,460,0,705]
argument6[157] = 627
return a-b/c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = {"403":"R","":3.857015673613149e+307,"7.826331153024161e+307":9.53273034903725e+307,"1.1906728657080117e+308":126,"n":"K+"}
argument7 = {"595":"","823":"","":"G","vk2":"","8.05235215815219e+307":655,"2.1947799104316654e+305":1.7976931348623157e+308,"bc":595,"(|":893,"1.7976931348623157e+308":""}
return a+b+c
};
var base_0 = [714,")","I%D"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,")","I%D"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,")","I%D"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,")","I%D"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test437.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)