





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[7.92397107964922e+307] = [1.7976931348623157e+308," uZ",-1,"]_%","gi",-100,"]k"]
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = 5.231511406055603e+307
argument3[4] = "`5[p"
base_1[3] = {"1.5142837561037734e+308":893,"-100":"","n":1.6126112213832594e+308,"3.275840543545729e+307":1.0872355614047976e+308,"":4.27881565499769e+307}
return a-b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.3130321063336282e+308] = ""
return a/b/c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = {"157":893,"213":607,"5.488884905446732e+307":"","M4M":"","-100":5.175367241814264e+307,"":"Zdk&","n,":",m","Z":""}
argument6[-1] = {"59":"","242":"4","595":"","1.6828979215074786e+308":403,"":"","Pg":714,"hA":"7?'"}
base_3[1][1] = true
return a-b+c
};
var argument6 = r_0;
var argument7 = null;
var base_0 = ["S","B+f;",783,893,"[7",-1,",","70"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["S","B+f;",783,893,"[7",-1,",","70"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S","B+f;",783,893,"[7",-1,",","70"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S","B+f;",783,893,"[7",-1,",","70"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test262.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)