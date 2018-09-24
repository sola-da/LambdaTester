





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[213] = [618,100,"]",100,893,"fK[Fr",49,705]
argument1[3] = 1.6633662671843686e+308
argument2[2] = {"25":403,"49":607,"59":618,"1.3446851858726681e+308":1.7807987357252272e+308,"1.5466550633854674e+308":"","":8.308763673858985e+306}
return a*b-c/d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = false
argument6[59] = null
return a*b*c*d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = 157
argument8[0] = [627,627]
argument6[4] = false
return a*b+c+d
};
var argument7 = {"82":618,"460":3.940745630835119e+307,"655":"","969":1.4807338839617702e+308,"":1.509838595826959e+307,"R#":"E","s":705,"a":893};
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[403] = null
argument9[2.1869172855352885e+307] = ""
argument10[213] = [969,823,607,655,"x","p+","6","D"]
return a/b-c*d
};
var argument10 = [969];
var argument11 = r_0;
var base_0 = ["yw;","%M(g","2,2","5rF","b","d","e9","A",">&"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["yw;","%M(g","2,2","5rF","b","d","e9","A",">&"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["yw;","%M(g","2,2","5rF","b","d","e9","A",">&"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["yw;","%M(g","2,2","5rF","b","d","e9","A",">&"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test493.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)