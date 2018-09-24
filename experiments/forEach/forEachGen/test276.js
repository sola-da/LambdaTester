





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.0481490052276395e+306] = true
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.3130321063336282e+308] = null
return a/b/c
};
var argument3 = "";
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4.224481734419934e+307] = "5"
return a*b/c
};
var argument6 = [82,126,"MY",59,627,893,"9j","@"];
var argument7 = {"655":460,"1.1159847671000355e+308":1.2727639237477481e+308,"":"U99","'LX":607,"$":627};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = [595,607,823,783,49,59]
argument10[1.4034744228995816e+308] = null
argument10[1.4034744228995816e+308] = ["Q","+Gn","_l","^",",","O","y"]
return a*b/c
};
var base_0 = ["9","X&;","`","B9","7","]","Vb","#h","8","rs%"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9","X&;","`","B9","7","]","Vb","#h","8","rs%"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9","X&;","`","B9","7","]","Vb","#h","8","rs%"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9","X&;","`","B9","7","]","Vb","#h","8","rs%"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test276.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)