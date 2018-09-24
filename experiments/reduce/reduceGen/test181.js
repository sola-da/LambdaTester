





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = false
base_0[0][3] = {"5e-324":714}
argument2[1] = [242,"f?X",705,705]
return a*b/c+d
};
var argument2 = null;
var argument3 = 1.209427906087353e+307;
var argument4 = "";
var argument5 = r_1;
var argument6 = {"0":7.87935978159773e+307,"705":"","Dln":1.7086073681817144e+308,"_X":1.3173882812632415e+308,"7.688028980848823e+307":1.112755669391787e+307,"9.19251265171786e+307":6.502140054313662e+306,"1.0323484754541868e+308":""};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = true
return a*b/c/d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = 783
base_2[2][0] = {"49":"","":"[Za,","1.3421978449762067e+308":"","6.000342534304103e+307":6.898783575425047e+307}
return a/b+c-d
};
var argument9 = "";
var argument10 = true;
var argument11 = [0,213,126,893,823,49,5e-324];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = [595,-100,-1]
argument9[0] = "_o"
argument9[1] = false
return a+b*c-d
};
var base_0 = [213,783,"!","a","+",607,"BY;E","nJ-1",-100,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,783,"!","a","+",607,"BY;E","nJ-1",-100,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,783,"!","a","+",607,"BY;E","nJ-1",-100,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,783,"!","a","+",607,"BY;E","nJ-1",-100,705]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test181.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)