





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1]['{X'] = {"4.4681872588695063e+307":3.8811468437448336e+307,"6.301979592535033e+307":5.905171569644027e+307,"9.837053567356788e+306":3.7644548763151816e+307,"1.7766547029762302e+308":1.263181668163437e+307}
argument3['T'] = ["2","$&","r;","y^","wf","h",">J","[","o","M"]
return a+b-c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['_W'] = [157,1.7976931348623157e+308,893,-100,"w","*wjo",")",-1]
argument5 = false
return a*b/c
};
var argument5 = false;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = ["s","h","L","NNo1","h","e(Z"]
base_2[1][3] = false
return a+b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = 4.794106801620057e+307
return a-b-c
};
var argument9 = r_3;
var base_0 = ["wu",100,"b","E","w"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["wu",100,"b","E","w"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["wu",100,"b","E","w"]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["wu",100,"b","E","w"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test234.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)