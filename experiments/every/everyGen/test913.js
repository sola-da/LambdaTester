





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
argument2[6.148642213884202e+307] = "^s"
return a+b+c
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = 9.369327696411912e+307
argument5[82] = {"213":"","242":"68","6.149697612448835e+306":3.798361872923289e+307,"-100":2.1953905343236552e+307,"1.1411453697609127e+308":"","'":1.7335491464262837e+308,"4.591541184711192e+307":"","1.496214024263841e+308":"#'"}
argument5[1.6706143966770798e+306] = {"1.935175089108572e+307":"%"}
return a/b*c
};
var argument5 = r_0;
var argument6 = {"8.336748355887613e+307":"","":242};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = 25
argument8[1.9097830510613482e+307] = [893]
argument8['g]'] = {"627":1.3070248714520625e+307,"843":893,"893":"-"}
return a-b*c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = true
base_3[1][5] = false
return a-b+c
};
var argument10 = r_3;
var argument11 = {"126":595,"783":1.3880228469637509e+308,"1.784723620624525e+308":" Y","1.6714701195774257e+308":"","1.1427870450524145e+308":1.2447703044989554e+308,"#":"i","5.5214524631475196e+306":""};
var base_0 = [242,"9",705]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"9",705]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"9",705]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"9",705]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test913.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)