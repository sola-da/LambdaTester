





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {"783":"","W":893,"7.147350447499834e+307":"","O":"W","fQN":607,"":"","1.3038083229437703e+308":3.2970665434425974e+307,"9g2":""}
argument2['5L'] = null
base_0[1][8] = null
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = [126,1.7976931348623157e+308,969,607,-100,843]
argument3[4] = null
return a+b*c
};
var argument3 = 242;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = [783,25]
base_2[1][3] = {"0":"","1":1.709137403042833e+308,"8":823,"49":0,"714":1.0079533170534851e+307,"Uw:lSM&":6.508512511736796e+307,"8.295867395608939e+307":157,"":7.225196383661545e+307}
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = [823]
base_3[4] = 1.7321384931183158e+308
return a/b*c
};
var argument7 = {"0":242,"25":"km","59":3.9935946732943995e+307,"61":8.030261803464955e+307,"":"","C(":6.167903717191642e+307,"1.370810017534976e+308":49,">":1.2863238241005741e+308};
var base_0 = ["I?b","I","R","p?|","fo","l",";2"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I?b","I","R","p?|","fo","l",";2"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I?b","I","R","p?|","fo","l",";2"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["I?b","I","R","p?|","fo","l",";2"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test243.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)