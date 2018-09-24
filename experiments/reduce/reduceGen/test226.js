





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = true
return a*b+c/d
};
var argument2 = {"403":714,"807":"","":843,"1.4321001943035092e+308":"_",">7":"","G":213,"m=r_":460,"$":82,"1.5955126732838482e+307":""};
var argument3 = {"618":"L","Z":9.146594384120814e+307,"U":9.333540681575306e+307,"":">","2.497385861660227e+307":1.2368015593403405e+308,"k]2Y":25,"5.877434930285495e+307":607,">":1.1554427590343538e+308};
var argument4 = false;
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][9.12287810829114e+307] = [823,843,122]
return a-b/c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = [0,-100,49,242,969,49,893]
argument9 = null
return a+b+c+d
};
var argument8 = false;
var argument9 = false;
var argument10 = false;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[627] = {"1.2464623589684027e+308":6.26909138615582e+306,"1.4055758350784088e+307":"Mn","TL":"aN6=","":5.645365563370983e+307,"1.7976931348623157e+308":59,"8.963527553574085e+307":"'","+f;":""}
argument10[3] = null
return a/b+c-d
};
var base_0 = ["P@y","njG","@j",783,403,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P@y","njG","@j",783,403,655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P@y","njG","@j",783,403,655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P@y","njG","@j",783,403,655]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test226.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)