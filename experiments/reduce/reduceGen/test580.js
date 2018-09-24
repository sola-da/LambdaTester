





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = "@"
argument1[9] = {"595":"","618":-100,"w":"","1.7167370298733598e+308":"x","":1.5127958385170745e+308,"1.2256549567921009e+308":""}
return a+b+c/d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['HMm'] = {"595":"","823":1.1796096842286687e+308,"8.222711960907972e+307":705,"":"","1.7976931348623157e+308":460,"X":627}
base_1[6] = "a"
return a-b*c+d
};
var argument4 = {"2":1.1243562499838322e+308,"100":242,"122":">U","595":"w","607":"","1.1833246105497141e+307":1.3777966799054066e+308,"":8.501427076177693e+307,"1.0865393937019784e+308":6.809372615159445e+307,"2.4743578143388917e+307":1.6296856827698392e+308};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[595] = {"0":"","1.450062534764479e+308":"","":4.0176776835119257e+307,"-100":"","8.643476709719733e+307":1.2469857714477715e+308,"yS,":157}
argument7[5] = false
return a/b/c/d
};
var argument6 = r_1;
var argument7 = 1.1260687798500148e+308;
var argument8 = r_0;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = null
base_3[0][3] = ["*Ta",705,"A",82,157,"[i[",25,49,100]
return a/b*c/d
};
var base_0 = [714,823,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,823,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,823,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,823,100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test580.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)