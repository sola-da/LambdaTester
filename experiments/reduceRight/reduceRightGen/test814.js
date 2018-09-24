





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = true
return a+b-c*d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = true
base_1[4][1.7976931348623157e+308] = {"969":1.7297109490329677e+308,"6.964306945601385e+305":1.62662572045298e+308,"v":7.492173329512282e+307,"":49,":&WS":"","5.293199890910709e+307":403}
return a-b+c+d
};
var argument4 = ["[j1j","4W","sitF","m4","(","t#"];
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['a'] = {"0":"z","607":"","618":"Ple","":"","2.1022218426671406e+307":"WNyLtcp"}
argument8[655] = ["2","EF","-=","!N4S","A<ZX:MYm","P","`2L","cW_d!"]
argument8[2] = true
return a+b/c/d
};
var argument7 = {"0":"","6":"","122":6.634386949832804e+307,"823":893,"2.570171362656094e+307":1.6643863797324787e+308,"7.771333950255652e+307":1.4484043513052099e+307,"2.3515813047988986e+307":"","]@":"e","":618,"&":1.2078447903514724e+308};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1][4] = "B"
argument10[1.4250811791542279e+308] = {"122":"E(","460":100,"823":"","893":783,"":""}
argument9[8.575765443877852e+307] = 25
return a*b*c/d
};
var argument9 = r_0;
var base_0 = [460,655,-1,0,213]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,655,-1,0,213]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,655,-1,0,213]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,655,-1,0,213]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test814.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)