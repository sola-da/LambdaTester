





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][9.12287810829114e+307] = 1.0098514005839953e+308
argument3[90] = {"655":"k","Z":3.9651670919937627e+307,"N":"C<3","1.745954455062843e+308":783,")7-is":1.1096366359901752e+307,"p$o":705,"{":"T^8","":7.827818656902757e+307,"k%":""}
return a*b-c+d
};
var argument2 = null;
var argument3 = null;
var argument4 = ";LgHd";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[126] = [607,705,49,460,714,893,5e-324,843]
argument3[1] = [-1,100,705,59,100]
return a/b*c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = 4.017697603313555e+307
argument8[4] = false
base_2[2][0] = {"25":"`","655":25,"1.644068161243328e+308":"","ld}":1.3411280588579277e+308,"":"","L":403,"DF":"H","1.5817651419277392e+308":""}
return a/b*c/d
};
var argument7 = true;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = {"0":"-pv","6.91882845335176e+307":"","5.651989444118947e+305":"","":"9j","^B":-1,"x,":"*","1.0608291806112581e+308":"$,2$A"}
argument11[4] = 1.0015207005283614e+308
argument11['18{'] = [82,"45{o","bh","H","ec0V","hm>","{<f","w-"]
return a*b/c*d
};
var base_0 = [893,-100,618,893,213,460,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-100,618,893,213,460,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,-100,618,893,213,460,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-100,618,893,213,460,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test638.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)