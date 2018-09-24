





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[893] = {"":"ai*9"}
argument2[8.748669805137695e+307] = {"595":"'","":"","-1":"!","&":"","1.5159301769725996e+308":3.8126438984651813e+307,"3.8643581369292014e+307":8.032078622007803e+307,"9.909975368620634e+307":893}
base_0[3][1.7261030733891165e+308] = 59
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[126] = 213
return a-b/c
};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['V'] = null
argument6[4] = [823,618,607,843,-100,82,969]
argument5['='] = null
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = [126,893]
argument7[783] = 8.13800339697649e+307
argument7['^h'] = "X^2i$"
return a-b*c
};
var base_0 = ["m","L","WnE",893,969,-100,")N","a"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["m","L","WnE",893,969,-100,")N","a"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["m","L","WnE",893,969,-100,")N","a"]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m","L","WnE",893,969,-100,")N","a"]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test753.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)