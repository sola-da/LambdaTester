





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['jo'] = "*"
base_0[4][7] = null
base_0[0][5e-324] = [100,122,82,126,893,1.7976931348623157e+308]
return a*b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = [-1,100,460,100,1.7976931348623157e+308,0,460]
argument4[3.0481490052276395e+306] = null
base_1[9] = {"6":1.5697645297785266e+308,"460":"","q":"","1.2602940684544413e+308":"","j{i+":100,"":1.0703916863578615e+308,"uN":5e-324,"oiO":607,"3.019422271792591e+307":9.706322997779963e+307}
return a+b-c
};
var argument4 = r_1;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['T'] = 4.902248898430609e+307
base_2[0][0] = {"82":1.1658589878322381e+308,"823":969,"-100":"zo","":6.684418090550874e+307,"1.0328205826461224e+308":0,"9.761215985509356e+307":"A8"}
argument6[0] = {"3.9467524199938466e+307":403}
return a+b/c
};
var argument7 = 1.7870234337418953e+308;
var argument8 = {"843":"xb`6!i","893":6.401579245790635e+307,"4.893568887305866e+307":"","":"","&":":zLtq"};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[2] = ["*R",")c"," ","^+","WlU","Y","kp","-j","9"]
argument10[6] = "f){"
return a-b*c
};
var base_0 = [-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100]
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test534.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)