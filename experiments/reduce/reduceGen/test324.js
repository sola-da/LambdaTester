





var callbackArguments = [];
var argument1 = true;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[627] = "p"
return a+b+c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['*c'] = null
argument6[0] = false
argument6[403] = {"":"","G":1.0356160915172718e+308,"1.1057125282085922e+307":25,"|":"g{+|","4.2008371116378156e+307":1.2923497041701724e+308,"4.683527225590161e+307":1.5537421725364437e+308}
return a+b-c-d
};
var argument6 = r_1;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[82] = [5e-324,100,-1,705]
base_2[4] = 969
return a*b-c-d
};
var argument9 = r_1;
var argument10 = r_1;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[7.463432409233234e+307] = null
base_3[1] = {"1.7155014929404864e+307":4.4309948432942184e+307,"":"!NhC1"}
base_3[8] = false
return a*b/c/d
};
var base_0 = ["I{g","0","boL","z"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I{g","0","boL","z"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I{g","0","boL","z"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["I{g","0","boL","z"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test324.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)