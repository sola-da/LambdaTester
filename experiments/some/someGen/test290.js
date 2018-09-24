





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = [607,893,242,627,157,1.7976931348623157e+308]
base_0[5][0] = 8.559875256962217e+307
return a+b+c
};
var argument2 = ["D{>]","0","}V","@w","FF","&K","w","W"];
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"655":"sq","3.752068960536823e+307":"F","1.1155300969633047e+308":1.4835585908879936e+308,"":1.2234641080444905e+308,"I":6.178959181231483e+307,"]Y":"","KP":403,"PQ`":"l@a","7.946828847605489e+306":"@7"}
base_1[4][7] = false
argument5[3] = {"242":""}
return a+b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = 0
base_2['length'] = "fG"
return a+b/c
};
var argument7 = null;
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[618] = "NNT"
base_3[0] = {"59":595,":Z":655,"3.866012271507947e+307":893,"":"b"}
argument10[4.224481734419934e+307] = {"157":-1,"":"","1.2389553981454226e+308":4.638379498409257e+305}
return a*b+c
};
var argument10 = r_0;
var argument11 = {"8":"","157":"","627":1.4121401248545185e+308,"783":59,"lX-$":"f%","1.0493052071475804e+308":"1x0","":"z","1.5232366194565586e+308":"Qg"};
var base_0 = ["h_","]"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h_","]"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h_","]"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h_","]"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test290.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)