





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1]['!cck7Mm'] = false
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.4034744228995816e+308] = ["p","$",969,"g[","&","iU","0"]
return a+b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1.3434821406183095e+308] = 49
argument4[3] = {"82":2.2828083832204316e+307,"-100":213,"5e-324":"","1.3369578468609993e+308":"","":714,"9.371398346326024e+307":969,"7.103995973047636e+307":"FT=`Dn","1.1074563683935594e+308":"s8rI","K":"","1.5602010831581043e+308":"h"}
return a/b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = [655,82,-1,460]
argument6[1.0546776681946723e+308] = true
base_3['filter'] = {"627":"","PNyjS:":"9A","":"","`":"K","1.924843522159924e+307":1.7506013236238116e+307,"r^S":5.875297337819461e+306,"R(":242,"LR":2.4934703294865296e+307,"C>":"`"}
return a*b+c
};
var argument5 = {"595":"DF{F","1.7394185942769049e+308":"","1.764533722175215e+308":"","1.7976931348623157e+308":7.28826601979092e+307,"":"","s`daf(":""};
var base_0 = [157,618,122,242,783,82,705,783,122,59]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,618,122,242,783,82,705,783,122,59]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument4,argument5)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test531.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)