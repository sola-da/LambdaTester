





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"0":242,"460":-1,"823":100,"893":969,"l":843,"A$g":"","1.0461247221223948e+308":"","":2.1166173385847864e+307,"U":1.0388354276138344e+308}
argument3[157] = false
argument3[714] = 1.7976931348623157e+308
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['A'] = "cV"
argument3[1]['d'] = {"618":"","sDG":"","2.614337055599925e+307":""}
return a/b+c
};
var argument3 = null;
var argument4 = 460;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = ["j",618,"^4",403]
base_2[4] = 823
return a+b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = [705,82,893,714,122]
base_3[1] = {"122":1.4965721891250505e+308,"595":242,"-1":49,"1.3321733982029657e+308":"","1.507994807452453e+308":""}
base_3[3][2] = 1.7976931348623157e+308
return a*b+c
};
var argument7 = r_1;
var base_0 = [823,59,122,126,655,-1,403,100]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,59,122,126,655,-1,403,100]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,59,122,126,655,-1,403,100]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,59,122,126,655,-1,403,100]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test147.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)