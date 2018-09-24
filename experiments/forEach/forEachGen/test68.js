





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = 1.2777767488959405e+308
base_0[0] = {"893":242}
base_0[0][823] = {"655":157,"-100":""}
return a/b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = true
base_1[9] = {"100":"`r8[B","126":"L","jM|":"nL(","":783,"2.7292855913263713e+307":"$m","Q":"","9.981122214369923e+307":157}
base_1[6] = ""
return a/b/c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][823] = {"59":"","618":"","705":7.322810021407006e+305,"]@*)":"^K","x":"u","1.1686388122159516e+308":")S","":"]","A<z*":1.2688152566766349e+308}
base_2['length'] = ["#E"]
argument6[3.0481490052276395e+306] = false
return a+b+c
};
var argument6 = {"705":"","":"zy(","6.214080546459266e+307":"","5.798188633052839e+307":157,"Zcvu#":595,"1.3853159234701984e+308":"Yq{"};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-1] = "Xe="
return a*b+c
};
var argument8 = null;
var argument9 = null;
var base_0 = [122,100,100,783,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,100,100,783,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,100,100,783,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,100,100,783,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test68.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)