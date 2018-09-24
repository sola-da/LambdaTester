





var callbackArguments = [];
var argument1 = r_0;
var argument2 = null;
var argument3 = ["@V","X7-F","b","9M","i&"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[8] = {}
base_0[0][0] = false
argument2[213] = null
return a+b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = {"122":5.104126465516642e+307,"403":213,"893":7.269511898841394e+306,"{;":"L","":783,"6.534859309961289e+307":"","R6":1.3593015379882868e+308,"L4":893,"4.548055082252967e+307":"h"}
return a*b-c+d
};
var argument6 = r_0;
var argument7 = r_0;
var argument8 = 655;
var argument9 = [-1,893,122,-100,460,213,242,595];
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = null
argument9[6.35085648319999e+307] = {"213":"","O":59,"":969}
argument9 = true
return a-b*c/d
};
var argument11 = r_2;
var argument12 = true;
var argument13 = {"49":"<","242":"","607":655,"705":"j","":6.208772486543545e+307,"6.878714512786711e+307":"-","m":5.695295555446905e+307,"Q&t":"eD","[%iI":6.1370721033645e+307,"gG":1.4413326881305467e+308};
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = false
argument13 = {"618":655,"S:C":"Zj;","1.4877952019393346e+308":""}
argument12[627] = "L1A"
return a/b-c-d
};
var base_0 = [-100,0,157,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,0,157,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,0,157,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,0,157,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test241.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)