





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[157] = {"213":595,"714":783,"893":"","":"sz","4.0455515785445895e+307":655,"p1@p":1.2001448625885862e+308,"9.93873512703908e+307":627}
return a+b+c
};
var argument2 = {"49":969,"595":126,"607":1.0688790030590482e+308,"2.101718166811012e+307":"=,","^{o,lT":-100,"":"u={:","q":"","*=":"F","mx=":"d%"};
var argument3 = [157,1.7976931348623157e+308,100,627,655,893];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1.3434821406183095e+308] = [-1,607,126,595,-100,403,655]
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.268696794505825e+308] = {"403":"`","1.743062130644917e+308":714,"p^a":618,"8.702829746791725e+306":"$C","E":1.6010711439388854e+308,"1.7976931348623157e+308":"","6.553717445438271e+307":6.980517987960866e+307,"":607,"_":5e-324}
argument6[157] = null
base_2[0][1] = 242
return a/b-c
};
var argument6 = {"82":"b{Vn","705":969,"H":627};
var argument7 = {"705":6.114496336856856e+307,"2.976054893489791e+306":"","tO":"","1.7688754036238504e+308":"O","":"dI","-100":843,"$+EC":"'+","3.2719606044214875e+307":1.5024644741757354e+308,"M":59};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = null
return a/b*c
};
var argument9 = 1.4846394523927107e+308;
var base_0 = [49,122,-1,893,157,1.7976931348623157e+308,157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,122,-1,893,157,1.7976931348623157e+308,157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,122,-1,893,157,1.7976931348623157e+308,157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,122,-1,893,157,1.7976931348623157e+308,157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test815.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)