





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = null
return a*b*c
};
var argument2 = 8.440711010762639e+307;
var argument3 = 893;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.4034744228995816e+308] = null
base_1[8] = 1.0633016582218726e+308
argument5[-1] = {"122":"`","607":1.4261364618337118e+308,"z":3.1246062673320567e+307,"%":9.1874594186542e+306,"":"A","1.2197922469669354e+308":"q"}
return a-b*c
};
var argument5 = {"213":"","595":"aBK9","1.2613690818883276e+308":"","":213,"3.9895022445574034e+307":":8","1.0249241136007476e+308":"jn","1.2539039961382507e+308":"n"};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = {}
return a-b*c
};
var argument8 = r_0;
var argument9 = 969;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = 1.2238725048629105e+308
argument12[403] = {"100":"","655":3.34201696323891e+307,"":213,"q":8.203808080930584e+307,")":"WG","+Ne":""}
argument11[157] = {"n'e":"m"}
return a-b*c
};
var base_0 = ["Wjj",618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test426.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)