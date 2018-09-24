





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = "I"
return a+b-c
};
var argument2 = null;
var argument3 = ["qKh","I]","J5",";",",","l{!","8r|fB"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['n,5s@s'] = {"705":"","969":"","+":"noE"}
return a*b/c
};
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = {"OS":1.1115893330776428e+308,"":1.6634588394005558e+308,"-1":""}
argument8[5] = {"59":714,"607":1.2980112215502624e+308,"1.1841447740828479e+308":"","1.0932394637875115e+307":1.5332078896656112e+308,"1.5589085693708857e+308":6.004903091608741e+307,"1.0458440460996785e+308":"","8.907146193139132e+307":4.960600759376084e+307,"":9.725482582801326e+305}
base_2[2] = {"126":"B","595":126,"":"wW@M","-100":100}
return a/b+c
};
var argument8 = false;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = {"403":1.7899113801170001e+308,"460":1.2247455337047988e+308,"627":"","%!8`un":1.3248537938549578e+307}
argument12[242] = null
base_3[0][3] = ""
return a*b/c
};
var argument11 = "";
var argument12 = false;
var base_0 = [25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test864.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)