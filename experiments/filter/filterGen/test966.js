





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = null
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = false
return a-b/c
};
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[-100] = ""
base_2[3][1.3434821406183095e+308] = {"460":1.359106153132954e+308,"618":-100,"":"","8.586848328959931e+307":59,"5.769513911933439e+306":5.439379093465963e+307,"|iZ":6.106974798246119e+307,"1.5222471423085663e+308":100,"_f4":"V","7.313525549936068e+307":49}
return a/b/c
};
var argument5 = {"242":1.567915477595017e+308};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = {"655":7.704156600364459e+307,"783":705,"":843,"8.592476171550498e+307":"`","6.293789758198759e+307":""}
return a+b/c
};
var argument7 = r_1;
var argument8 = 1.665500918478807e+308;
var base_0 = [655,"RVkW","A",100,"#","wH",49,"n"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,"RVkW","A",100,"#","wH",49,"n"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test966.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)