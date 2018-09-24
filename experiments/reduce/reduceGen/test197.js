





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = "0by "
argument2[7] = null
return a-b*c/d
};
var argument2 = null;
var argument3 = null;
var argument4 = false;
var argument5 = false;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = {"126":82,"655":"","":"V","w":1.2046952369848905e+308,"1.2859159920695569e+307":"","H":213,"1.1724419915915371e+308":"Q","1.2800661050783014e+308":3.2885912344168796e+307}
base_1[1] = true
argument4['Cb'] = 242
return a*b*c/d
};
var argument8 = r_2;
var argument9 = false;
var argument10 = false;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = ""
return a+b+c/d
};
var argument12 = {"595":-100,"627":0,"":"&(","1.3096037234980983e+308":2.558671727942094e+307,"1.0861157339664806e+308":"","3O":"","2.7228921195141495e+307":""};
var argument13 = null;
var argument14 = null;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[1] = ["gK","y","Z","@x","sQ","JV","X"]
return a*b-c/d
};
var base_0 = [893,969,242,126,82,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,969,242,126,82,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,969,242,126,82,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,969,242,126,82,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test197.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)