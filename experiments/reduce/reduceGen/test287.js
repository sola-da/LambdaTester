





var callbackArguments = [];
var argument1 = ["j","C"];
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = true
base_0[0][9.12287810829114e+307] = 1.5449295229953332e+308
return a+b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = 969
argument5['Cb'] = [82,25,893,59]
return a*b*c/d
};
var argument6 = [157,893,82,0,242,893];
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[6.35085648319999e+307] = null
argument9[25] = [460,213,893,1.7976931348623157e+308]
base_2[0] = 5.079713462813522e+307
return a-b-c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = 705
base_3[0] = {"823":49,"":"","1.3445998772097735e+308":1.029627575954282e+308,"PD":595,"4.659822536864351e+307":""}
return a/b/c+d
};
var argument10 = null;
var argument11 = null;
var base_0 = ["L","#sg","Ft4V","1=$","T<eD","a","QG","gbB_","?","-ES"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["L","#sg","Ft4V","1=$","T<eD","a","QG","gbB_","?","-ES"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["L","#sg","Ft4V","1=$","T<eD","a","QG","gbB_","?","-ES"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["L","#sg","Ft4V","1=$","T<eD","a","QG","gbB_","?","-ES"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test287.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)