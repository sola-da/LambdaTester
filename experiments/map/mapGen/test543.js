





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7][2] = {"4.520673608601219e+307":1.7922035368259198e+308,"g":"v3","":"M","1.710393693634599e+308":595,"-100":460,"1.5807182062592247e+308":460,"1.4053964959038366e+308":627}
return a-b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[969] = 893
argument4[7] = 403
argument4 = 1.4361452781300674e+308
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = [1.7976931348623157e+308,714,627,100,460,705,-100,49]
argument5[3] = {"100":25,"607":"ig#","1.12617543101605e+308":"|","8.994064853710287e+307":"","":1.7934786782097414e+308,"G":"","S":"tj","1.0641516928805113e+308":""}
argument5[1]['d'] = [403,595,403,157,607,126,1.7976931348623157e+308,618,627,59]
return a+b*c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.1881593224845412e+308] = {":":100,"B":"+L!","":"","9.036045164943343e+307":"","t":"","[#<":2.1737863886644282e+307,"2.155907708198452e+307":"","1.3243569876914487e+308":213,"1.0774979855909614e+308":"!"}
base_3[5] = 1.4988138313518536e+308
argument6[3] = 9.259659674829284e+307
return a*b-c
};
var argument7 = r_2;
var argument8 = r_2;
var base_0 = ["K;D","sB","m","I]ofQ:_3","%","LT","5","^d","l"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K;D","sB","m","I]ofQ:_3","%","LT","5","^d","l"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K;D","sB","m","I]ofQ:_3","%","LT","5","^d","l"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test543.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)