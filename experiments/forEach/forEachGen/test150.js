





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['1SHF1'] = false
base_0[5] = "]f"
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[-1] = {"49":"","#'":823,"":"","7.962849213036684e+307":714,"1L":"","8.031834077842752e+307":2.720154560212796e+307,">":49,"6.481248935291219e+307":59,"1.0927556244811182e+308":969}
argument3[3] = {">8":"","8.270555397865444e+307":1.7976931348623157e+308,">8,FZfO":"","2.640768373108813e+307":"","1.5365605778363913e+308":"","":403,"_":"8","^":"YZ","VFIx":""}
return a*b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][1] = ["E","Q","^|",">?","n>m|m"]
return a/b-c
};
var argument4 = {"100":"8","242":1.387843420622056e+308,"595":6.968398871382843e+307,"714":25,"T":"l","3.0734261973946973e+307":"","":"D","P3":1.6247796191802128e+308,"1.3029026874225429e+307":","};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.0481490052276395e+306] = {"618":-100,"783":"",">":1.2979519088717899e+308,"1.5813000618784656e+308":25,"{fT@":"nba|","":"","8.089552239302956e+307":",","x`Ug":""}
argument8 = {"25":"","460":705,"893":6.13635261943275e+307,"":"V!","1.1313138721211613e+307":"","T":"q"}
return a/b-c
};
var argument7 = null;
var base_0 = [122,607,607,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,607,607,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,607,607,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,607,607,627]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test150.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)