





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][5e-324] = ["76",82,"+","Q9",100]
base_0[4] = [49,618,0,655,49,705]
argument3[0] = [403,122,-100,1.7976931348623157e+308,823,25,213,1.7976931348623157e+308]
return a-b*c
};
var argument2 = {};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['wIs'] = 6.328064585138236e+307
base_1['filter'] = null
return a/b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = {"403":1.6050545696524495e+308,"5.598066686385096e+307":9.966211401067535e+307,"[l":100,"":126,"8.167364464965488e+307":1.572126048027877e+307,";":460,"D":714}
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.7154103611117224e+307] = "d="
return a+b/c
};
var base_0 = [595,655]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,655]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,655]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,655]
var r_3= undefined
try {
r_3 = base_3.filter(argument5)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test253.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)