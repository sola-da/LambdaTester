





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = ""
base_0[6] = {"843":3.1955102073865713e+307,"1.4250633627127937e+308":607,"":"","7.073676126547249e+307":0}
argument2[5] = [655]
return a-b*c
};
var argument2 = [">G","@&7f","W","f","HL(NC"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = -1
return a*b/c
};
var argument4 = true;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = ""
base_2[7] = true
argument7 = ["UA","r","&","q(;ES","<k4",">y","V","4","tCk"]
return a/b/c
};
var argument7 = null;
var argument8 = {"157":"i","1.7976931348623157e+308":1.2090573286391286e+308,"###":"","":"Z","f":2.775924834628594e+307,"4.403952196911522e+307":"","5e-324":5.534211203821633e+307,"3.338194000174974e+306":1.3882446373903214e+308,"7.009018591426276e+307":618};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = {"627":1.1051480830196983e+308,"e":3.7856514662728426e+307,"B&1*q":"0J","Z":"","1.0164949085826488e+308":126,"":"qyGK "}
argument10[1.6798476101238045e+308] = [618,655,-100,403,82,49,25,627,1.7976931348623157e+308]
argument10[4] = ""
return a-b-c
};
var argument10 = 1.0515259297424486e+308;
var argument11 = r_3;
var base_0 = [618,122,627,242]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,122,627,242]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,122,627,242]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,122,627,242]
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
require("fs").writeFileSync("./experiments/some/someGen/test126.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)