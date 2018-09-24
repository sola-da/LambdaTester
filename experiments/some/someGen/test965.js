





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = false
argument2[6] = true
argument1[3] = ["k#",969,"8",-1,"z","="]
return a+b/c
};
var argument2 = [607,655," ",82,157,49,"f",705,"R","s"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['n,5s@s'] = {"49":"","213":1.1320871696344523e+307,"8.43671658979847e+307":"7","1.3202217390785247e+308":-1,"":-1,"3.2886962925018154e+306":"v)pL","HZ5":783,"1<'":3.7816461343216024e+306,"ui":"9"}
base_1[0][4] = true
argument3 = ["W","J","L+M","y","q{,T]"]
return a-b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['V'] = 7.766165074312545e+306
return a+b-c
};
var argument5 = null;
var argument6 = 1.904761739122655e+307;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = true
return a/b+c
};
var base_0 = ["NE]*FB<",-1,157,"C"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["NE]*FB<",-1,157,"C"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["NE]*FB<",-1,157,"C"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["NE]*FB<",-1,157,"C"]
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
require("fs").writeFileSync("./experiments/some/someGen/test965.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)