





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.1881593224845412e+308] = 25
argument3[5] = [893,627,618,242,607,783,59,-1]
return a/b*c
};
var argument2 = [823,"-i1k","jf+",893];
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][7] = {"618":"","2.2711420745846814e+307":460,"6.185032327365461e+307":-100,"":"H","1.4795119140249012e+306":126,"*g|Bd6":"ICXiG"}
return a*b-c
};
var argument5 = ["Q!",213,627,",H","u4","ea*","^K;D",607,126,"m"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[403] = null
return a+b*c
};
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8][0] = null
argument9[25] = ""
argument10[1.1881593224845412e+308] = "x"
return a-b+c
};
var argument9 = r_2;
var argument10 = r_2;
var base_0 = [213,655,0,618,126,82,213,893,823]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,655,0,618,126,82,213,893,823]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,655,0,618,126,82,213,893,823]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,655,0,618,126,82,213,893,823]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test545.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)