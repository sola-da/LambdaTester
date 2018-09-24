





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][2] = 126
return a-b-c
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = "gw"
base_1[3][2][5] = null
argument5[3.208837311680636e+307] = {"1.1006909124751285e+308":714,"_f5D3":1.0016487002105424e+308,"&":8.560752382760418e+307,"4.4220611954089595e+307":59}
return a+b/c
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][1] = "n1Yq"
argument9[1] = 82
argument8[1] = {"59":"S","82":-1,"100":607,"627":9.210527550534303e+306,"1.0036232487043647e+308":"seFi#n","2.455354591164276e+307":82,"":25,"1.5619044527864647e+307":"l95"}
return a+b/c
};
var argument8 = true;
var argument9 = [403,714,"R"];
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[783] = null
argument11[82] = 1.1896590294436115e+308
return a+b/c
};
var argument11 = 1.499835974022376e+308;
var argument12 = false;
var base_0 = [714,460]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,460]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,460]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapGen/test869.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)