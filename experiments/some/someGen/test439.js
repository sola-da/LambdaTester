





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['_W'] = false
argument2['_W'] = ["k"]
base_0[2] = {"595":157,"":823,"2.3769854704238864e+307":""}
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2.249941463060761e+307] = {"242":"ayP*","618":843,"823":783,"1.4684361107707145e+308":"?","7.501409151142689e+307":893,"WI'":1.6277253588202245e+308,"1.6240513495674965e+308":2.957441223204583e+307,"3.61313673481431e+307":705,"3.801826846325153e+307":1.6452147021043008e+308,"9.66898229314095e+307":""}
argument4['^h'] = true
return a*b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[403] = [59,25,25,595,"f","l"]
base_2[1] = {"595":"","783":242,"1.7923196125261047e+308":1.7512319509530204e+308,"!{":"U","W=":"J","l@":"","":"4","C":1.1322840046069075e+308,"1.3754938564369921e+308":157}
return a+b/c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = null
argument6['5L'] = 1.0807235594545555e+308
argument5[2] = null
return a*b/c
};
var base_0 = [627,655,655,59,59]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,655,655,59,59]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,655,655,59,59]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,655,655,59,59]
var r_3= undefined
try {
r_3 = base_3.some(argument5)
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
require("fs").writeFileSync("./experiments/some/someGen/test439.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)