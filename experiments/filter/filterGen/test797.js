





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"49":969,"595":126,"607":1.0688790030590482e+308,"2.101718166811012e+307":"=,","^{o,lT":-100,"":"u={:","q":"","*=":"F","mx=":"d%"}
argument2['c'] = [157,1.7976931348623157e+308,100,627,655,893]
base_0[2][1] = ["v<","sN>","hI"]
return a/b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = 6.922060350482143e+307
argument4['jo'] = 1.093895212233112e+308
return a/b-c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7847438319683965e+308] = "E"
argument7[1.7847438319683965e+308] = [82,1.7976931348623157e+308,25,823,157,893,460,714,157]
return a+b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.0481490052276395e+306] = ["`"]
argument7[7.82874486699946e+307] = {"627":1.6545524579014356e+308,"969":"H","4`":705,"H":783,"+b{Vn":705,"2.976054893489791e+306":"","tO":"","1.7688754036238504e+308":"O","":1.4360545350780394e+307,"-100":843}
argument7['K'] = {"627":4.2037751658079385e+305,"":"=","$+EC":"'+","3.2719606044214875e+307":1.5024644741757354e+308}
return a+b-c
};
var argument7 = "";
var base_0 = ["C","j"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C","j"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C","j"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C","j"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test797.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)