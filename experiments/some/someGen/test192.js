





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = {"25":627,"705":460,"783":8.811646004475184e+307,"z":"","{X":213,"8.411772156172929e+307":4.2229804891442793e+306}
return a+b*c
};
var argument2 = "sC";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9] = true
base_1[5][0] = {"25":"","607":126,"823":"","1.150855218454733e+308":"0","":"wn","aCNe":"",",":460,"2.7953406123757557e+307":""}
base_1[9] = null
return a+b*c
};
var argument5 = null;
var argument6 = 607;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = 1.8382022546618e+307
base_2[9] = null
base_2[5][0] = {"893":1.0862946320835376e+308,"1.469675614744603e+308":"","1.1400781839560427e+308":9.400181569736919e+307,">XHm1":1.0149538323736175e+308,"-100":"","5.988198300552646e+307":1.243446698529588e+308,"4.456251793057931e+307":""}
return a*b*c
};
var argument8 = false;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5] = {"3":1.1465490919089324e+308,"783":3.0579297391417944e+307,"8.514729756570929e+307":1.2686735975592097e+308,"1.0852078845371491e+308":"","":82,"9.978035284290205e+307":3.882909720579613e+306,"2.320353221901601e+307":-1}
base_3[1][3] = {"5.454978898386515e+307":"","&c":3.7981134701791647e+307,"1.2373465169245588e+308":-100,"":"w^"}
return a/b*c
};
var argument11 = null;
var argument12 = [893,969,823,655,-1,618,823,607];
var base_0 = ["H",157,213,"LE&","$3*h"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H",157,213,"LE&","$3*h"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H",157,213,"LE&","$3*h"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H",157,213,"LE&","$3*h"]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/some/someGen/test192.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)