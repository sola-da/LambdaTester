





var callbackArguments = [];
var argument1 = "Ky";
var argument2 = true;
var argument3 = {"9":25,"82":213,"893":"",";QYHR8h":"","":"8A","-100":6.187638782142163e+307,"1.4232315858213301e+308":"C","f":"o","1.5392185658674475e+308":157};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = 7.016661313723579e+306
base_0[1] = null
argument3[627] = -1
return a+b/c*d
};
var argument5 = ["I1n,>C6","l","U)","1","&","9?","VWaf3","R<"];
var argument6 = 1.3478925840490686e+308;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[627] = {"":"tkEA","1.0765115790638008e+308":7.982262909611432e+307,"1.309684116166991e+308":""}
return a/b-c/d
};
var argument9 = "";
var argument10 = 1.474614680250469e+308;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = null
argument10[7] = false
return a*b+c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13 = {"2.5080203385102203e+307":"","6.738737454210671e+307":7.284749047804906e+307,"-100":"","":1.055827169763908e+308,"1.7490476485416068e+308":655}
argument14[25] = false
return a+b/c-d
};
var argument14 = ["q","F","@","oU+","M`","3"];
var argument15 = null;
var base_0 = [5e-324,1.7976931348623157e+308,403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,1.7976931348623157e+308,403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,1.7976931348623157e+308,403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,1.7976931348623157e+308,403]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test169.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)