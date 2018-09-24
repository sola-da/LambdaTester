





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = [213,823,59,5e-324,-100,122,607]
return a/b+c
};
var argument2 = ["T@",655,"Jgr",618,"1","G2i[%",1.7976931348623157e+308];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = ""
argument5 = {"122":59,"460":49,"714":1.3835138961893609e+308,"7.120328393633472e+307":"C","%":"A",")1":"","":"","1.3266498002819796e+308":"","4.567409223336656e+307":"","8.760754423186727e+307":""}
return a+b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = {"82":783,"403":"","618":"","893":"ycA1r;_","":893,"6.625527806389795e+307":843,"1.1109514721227221e+308":":","uEa":"","2:":403,"HG4":"z3"}
base_2[5] = 783
base_2[5] = {"595":"Rr","969":"}9","":242,"A":5.751461546174513e+306}
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = "("
base_3[2] = [25,-1,126,213,59,49]
base_3[0] = "Vm"
return a/b*c
};
var argument6 = r_3;
var argument7 = [0,705,595,595];
var base_0 = [460,893,100,460,-100,460,705,0,627,242]
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
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test13.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)