





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[627] = {"157":""}
return a+b*c+d
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = null
argument6[627] = {"213":607,"+":"","":8.30073785295246e+307,"5.441376964142186e+307":9.594697860936757e+307,"p":705}
return a/b*c*d
};
var argument5 = [714,122,969,893,157,126];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = false
base_2[0] = {"714":6.060374429303714e+307,"":"E",")x":"+","U!E":"z|b","1.2325249420365373e+308":2.786540471105158e+307}
return a/b/c-d
};
var argument7 = null;
var argument8 = true;
var argument9 = true;
var argument10 = true;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[655] = {"242":8.238274739941214e+307,"627":460,"x":607,"":1.1157085394623313e+308,"1.7499870519405313e+308":""}
return a*b+c-d
};
var base_0 = ["e|Mt","uk","Ju","V","<","0","#E","y"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e|Mt","uk","Ju","V","<","0","#E","y"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e|Mt","uk","Ju","V","<","0","#E","y"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e|Mt","uk","Ju","V","<","0","#E","y"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test958.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)