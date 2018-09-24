





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = {"":6.270033743755683e+307,"u":"","9.866704516513505e+307":403,"X":"A","-100":"]","-":1.7976931348623157e+308,"5r":3.6373755298982575e+307,"1.4512959058503543e+308":705}
return a-b-c
};
var argument2 = null;
var argument3 = {"49":"","J{A":"g","u:":714,"z":9.24442586011269e+307};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[122] = [1.7976931348623157e+308,-1,"_!","]I","Lp9GI"]
argument6[2.4183178393969103e+306] = 1.4736834503093759e+308
return a*b*c
};
var argument5 = "";
var argument6 = [969,618,59,157,-100,122,607];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = ","
return a/b/c
};
var argument8 = {"N":-1,"5.69972519316123e+307":3.355609001060768e+306,"1.7229817517230804e+308":"",")":"J","4.566833717345581e+307":607};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = null
argument10[4.960033715165713e+307] = {"25":"","1.4510929586162091e+308":2.359837938780485e+307,"|[":1.0259949104994678e+308,"1.2247105934169597e+307":5e-324,")":1.009929665333831e+308,"=":"","1.513012794858791e+308":"yH"}
return a*b+c
};
var argument10 = r_3;
var argument11 = null;
var base_0 = ["MS",242,100,627,"wGA","Di"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["MS",242,100,627,"wGA","Di"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["MS",242,100,627,"wGA","Di"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["MS",242,100,627,"wGA","Di"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test780.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)