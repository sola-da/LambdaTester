





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = {"655":403,"'Q#A":"","":":Z"}
argument3[0] = 126
return a-b/c
};
var argument2 = ["nc","X","o","v","O3","o","e1eO","[N","*"];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = null
argument4[2] = true
argument5[1.6798476101238045e+308] = {"25":3.024391710992694e+306,"59":1.3737798833791212e+308,"157":"Ug=<Y","5e-324":242,"K,mz":2.7105034217172984e+307,"":"Q","2.0663400047922938e+307":"(V","3.923581699300517e+307":"","9.962450969920737e+307":9.559299470061702e+307}
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = "YtV"
argument7 = ""
argument6['_W'] = [49,893,82,655,893,893,655]
return a+b+c
};
var argument6 = "^";
var argument7 = {"!k;":607};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2.249941463060761e+307] = [49,"e^^","O",100,1.7976931348623157e+308,157,59,823]
base_3[5][0] = 82
argument9[1.5109538778533692e+308] = {"823":9.610916941791283e+307,"1.0347269594555272e+308":1.4465192681184327e+308,"":"zlp","8.601461895202532e+307":"","1.2874122011273553e+307":893,"!W":8.659447849149259e+307}
return a-b-c
};
var base_0 = [25,0,783,705,893,783,"P"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,0,783,705,893,783,"P"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,0,783,705,893,783,"P"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,0,783,705,893,783,"P"]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test422.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)