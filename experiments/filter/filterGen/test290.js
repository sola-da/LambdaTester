





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['A'] = {"460":"","655":607,"843":"","1.5820795775315698e+308":"w","":2.1043523520025948e+307,"M":100,"6.756237202041814e+307":"w","7n&K":""}
base_0[9] = null
base_0[2] = true
return a+b+c
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = {"3.752068960536823e+307":"F","1.1155300969633047e+308":1.4835585908879936e+308,"":"ypf","I":6.178959181231483e+307,"]Y":"","KP":403,"PQ`":"l@a"}
argument6[2] = {"0":969,"157":"","1.2795829359068653e+308":",Ah","7.815493975147376e+307":157,"":"","+<fG":"Ow["}
return a+b+c
};
var argument5 = "NNT";
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = ["cR","0","c","Ov$","Q","f_","O"]
return a*b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[-100] = 893
return a*b-c
};
var base_0 = ["h_","]"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h_","]"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h_","]"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h_","]"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test290.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)