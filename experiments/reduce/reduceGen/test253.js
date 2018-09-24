





var callbackArguments = [];
var argument1 = true;
var argument2 = true;
var argument3 = "dfW";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = 7.577009085800103e+307
base_0[8] = {"242":8.554751896665501e+307,"":-1,"-1":"","BgBy":8.465797086127837e+307,"I":8.117936467075281e+307,"p":"<"}
return a-b-c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = ["1","*PP,","C","+f","Pk5"]
return a*b*c+d
};
var argument6 = false;
var argument7 = r_2;
var argument8 = true;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['s'] = 714
base_2[1] = 1.645051361702999e+308
return a+b*c*d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[1] = {"122":1.100031005847357e+308,"J":""}
argument13[1] = 2.200862533800682e+307
base_3 = {"25":1.771308911069505e+308,"&":595,"5.418276868787067e+307":"","6.096596417837487e+307":"","":2.717661338089534e+307,"2.283501174368125e+307":""}
return a+b/c-d
};
var argument12 = false;
var argument13 = true;
var base_0 = [":","H1K","H","2","$+",">6#4","g","?"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":","H1K","H","2","$+",">6#4","g","?"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":","H1K","H","2","$+",">6#4","g","?"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":","H1K","H","2","$+",">6#4","g","?"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test253.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)