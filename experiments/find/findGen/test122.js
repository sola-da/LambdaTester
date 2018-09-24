





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][6] = {"25":607,"3.496959664488208e+307":"","1.4699357543630441e+308":969,"''7":1.1963296259367247e+307,"k4":7.552104255138579e+307,"y":9.9225097829323e+307,"9.132688351252248e+307":714,"A":8.468332889840855e+307,"1.6366946720737281e+308":1.7976931348623157e+308,"1.2090573286391286e+308":"###"}
base_0[0][1] = true
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"157":"i","655":1.7831320363834765e+308,"843":-100,"893":1.2218838473670238e+308,"":"Z","5e-324":5.534211203821633e+307,"3.338194000174974e+306":1.3882446373903214e+308,"7.009018591426276e+307":618}
return a*b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = false
argument4 = 126
base_2[1] = 1.7976931348623157e+308
return a+b+c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[627] = ""
base_3[6][4] = ""
return a+b-c
};
var base_0 = [714,"D7H",618,"i","@",714,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"D7H",618,"i","@",714,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"D7H",618,"i","@",714,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"D7H",618,"i","@",714,-1]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test122.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)