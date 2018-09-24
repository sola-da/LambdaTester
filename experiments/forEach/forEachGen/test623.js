





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[969] = 7.559118096647112e+307
argument2[1.9097830510613482e+307] = {"59":126,"655":126,"714":1.7800568056113816e+308,"9.295393199317342e+306":1.1076032696149274e+308,"":"V","1.0540540288157427e+308":655,"-1":"p","{":"","n":"-]5"}
argument2['-'] = ""
return a*b/c
};
var argument2 = null;
var argument3 = "mD";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['ns'] = ""
return a-b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = false
argument6[8.748669805137695e+307] = {"1.7570720517711108e+308":5e-324,"6.348670858838151e+307":157,"":"T","5e-324":"",";":1.0667484147497822e+308,"2.3258210217249907e+307":""}
return a*b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][4] = 1.2319565318958744e+308
base_3[9] = "q1"
base_3[6] = ""
return a+b-c
};
var base_0 = [">","y"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">","y"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [">","y"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [">","y"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test623.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)