





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.4034744228995816e+308] = 5.329865474028922e+307
base_0[2] = [460,157,705,893,-100,893,783,714,618]
argument2[0] = false
return a/b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = 0
argument4[1.4570946481947045e+308] = "akg-"
return a/b+c
};
var argument4 = [157,"+P","a>o","&-K3",">",705,"N{yE8","U@]?d[FO","f"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[59] = {"0":"","100":5e-324,"c1":3.7196715699421775e+307,"n!":1.7951058125714194e+308}
return a/b-c
};
var argument6 = [-1,-1,705,714,49,1.7976931348623157e+308,59,823];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = ["-","O","4^","WZ#","9z"]
argument8['5pji-Y'] = {"823":0,"6.602521606673164e+307":0,"":82,"vS6(":1.6249012707150112e+308,"ef":213,"1.679662545931703e+308":1.630527292839018e+308,"1.201761957135343e+308":"Z","5.492031697469472e+307":843,"1.7405832366545093e+308":-100,"9.851095615057474e+307":""}
argument8[1.0446313380579697e+308] = 9.172969452074871e+307
return a-b-c
};
var argument8 = false;
var argument9 = false;
var base_0 = [49,783,460,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,783,460,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,783,460,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,783,460,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test829.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)