





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3] = {"9":1.5273455346198765e+308,"242":3.309046838512481e+307,"l":"(Q{","8.993646788714374e+307":843,"":"","1.5734174244186152e+308":242,"y":"","-":"cc","8Fx":59,"4.627416978452731e+307":3.0677108359300973e+307}
base_0[8] = {"893":"","+":3.6534633608640605e+307,"-1":-1,"W":823,"I":1.7907883643678914e+308}
argument2[1.6798476101238045e+308] = false
return a*b*c
};
var argument2 = true;
var argument3 = 5.468095612076841e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = ""
return a/b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = [714,-1,122,969,705,969]
base_2[5] = true
return a-b+c
};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = ""
base_3[6] = {"9.928075970541438e+306":403,"1.148259100340543e+308":"E","XLrI":"+4","Z(":"b","":"","iB":"@"}
return a+b-c
};
var argument9 = r_3;
var argument10 = ["V","p","R"];
var base_0 = [25,"I","e<@9*M",705,627,";",823,157,"J"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,"I","e<@9*M",705,627,";",823,157,"J"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,"I","e<@9*M",705,627,";",823,157,"J"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,"I","e<@9*M",705,627,";",823,157,"J"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test59.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)