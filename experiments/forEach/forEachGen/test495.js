





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = null
return a-b*c
};
var argument2 = false;
var argument3 = {};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = {"&1":"=_","1.41617069496478e+308":"qBy","1.377337218119553e+308":"","4.871859264020296e+307":1.3162094487100093e+308,"hCy":"","8.875018540356699e+307":783,"5lM":"@6G"}
argument5[126] = [242]
return a*b*c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = {"126":8.512096252391149e+307,"655":"","823":1.1998989898141803e+308,"":"Ss`","7.04048950750249e+307":8.988490918476608e+307,"Pe":""}
argument7['wIs'] = false
base_2[4][4] = {"460":"J","1.4846378314602455e+308":"rIz2","":"!"}
return a+b+c
};
var argument7 = false;
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[969] = ["6","el","b"]
return a+b/c
};
var argument10 = {"b{":627,"":"=","1.012762805691947e+308":"","!$#":"d","1.5228195706801124e+308":6.464081853471135e+307,"1.0767992226899571e+308":126,"-100":460,"VkD|R":1.3646490398072886e+307};
var base_0 = ["[","20%"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[","20%"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[","20%"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[","20%"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test495.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)