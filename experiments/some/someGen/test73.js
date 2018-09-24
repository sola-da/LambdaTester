





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = null
base_0[6] = {"655":59,"H":1.1259993326640715e+308,"yU":1.9291455605205584e+306,"1.313643781914713e+307":5.613146592542578e+307,"6.759303491753559e+307":"_","1.6262749568691224e+305":"p"}
return a+b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = 1.8275505810386188e+307
return a/b*c
};
var argument4 = 3.684599604811936e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.6798476101238045e+308] = true
base_2[0] = [100]
base_2[8] = 1.6855805371234066e+308
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = {"49":8.36606439354259e+307,"460":82,"":"Io","uo}":607,"1.7167784435133103e+308":""}
base_3[9] = 1.7350341904646154e+308
base_3[5] = ""
return a+b-c
};
var argument7 = null;
var base_0 = ["*&;",969,"v"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*&;",969,"v"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*&;",969,"v"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*&;",969,"v"]
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
require("fs").writeFileSync("./experiments/some/someGen/test73.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)