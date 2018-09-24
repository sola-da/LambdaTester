





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3.377960715099946e+307] = ["A-","Ql3","N","A","f","@v2","B","-"]
argument3 = 1.4451781446590704e+308
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = true
argument4[1] = "c"
base_1[4][7] = 59
return a*b*c
};
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['C'] = 8.5008218564984e+307
argument4[3.377960715099946e+307] = {"157":"E)S","213":100,"627":1.240615044451071e+308,"783":82,"893":"","1.7313346076668722e+308":9.91040096269862e+307,"1.0409968788528605e+308":969}
return a*b-c
};
var argument5 = "T";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-100] = {"100":"","-":59,"1.2314799759543875e+308":595,"1.2031856330515085e+308":"","1.349033534817146e+308":1.023273150186547e+308,"1.4816625627170622e+308":"k6C","1.1886295413437096e+308":100}
base_3[9] = true
return a/b+c
};
var argument7 = r_3;
var base_0 = [893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test323.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)