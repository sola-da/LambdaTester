





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[618] = "po"
argument1 = 1.2702622475467882e+308
base_0[2][5] = {"":"8A","ul!M":714}
return a/b/c
};
var argument2 = {"0":-100," ":"5FP","":""};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][2] = [126]
return a*b-c
};
var argument4 = "";
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6] = [783,783,49,"b","e",122,783,"jWv"]
argument8[607] = [618]
return a-b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['T'] = "(A9%g"
argument8[3.208837311680636e+307] = {"0":"","59":9.386617715334668e+307,"122":5.364347083515231e+307,"403":"w","607":893,"1.2522049905868947e+308":",","2.355849119081227e+307":3.0243373772504373e+307,"9<XEj2":"","p":6.073982398704126e+307}
return a-b-c
};
var argument8 = null;
var base_0 = ["sUD","q0",",1=ptY8","-G,",":","V{fY","YL","bN"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["sUD","q0",",1=ptY8","-G,",":","V{fY","YL","bN"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["sUD","q0",",1=ptY8","-G,",":","V{fY","YL","bN"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test537.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)