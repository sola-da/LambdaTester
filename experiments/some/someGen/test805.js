





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = [-100,49,100,59,157,-1,126,714,49]
argument1 = null
base_0[3][4] = ""
return a/b-c
};
var argument2 = "6";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[705] = false
argument4[4.224481734419934e+307] = null
argument4[2] = null
return a+b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.249941463060761e+307] = ""
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['f'] = 213
base_3[6] = "|&"
argument6[5] = ["F","^J","5Ia","@6","R","k","P","N"]
return a/b+c
};
var argument6 = {"1.671178444449307e+308":8.200271700720448e+307,"5C9U":1.6891445456506327e+308};
var argument7 = [0,"a+py^","%W@","EZ",")yHHG",893,893,"C"];
var base_0 = ["i","C,","D","#",";","m:",",fJ7","8p<!t"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i","C,","D","#",";","m:",",fJ7","8p<!t"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i","C,","D","#",";","m:",",fJ7","8p<!t"]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["i","C,","D","#",";","m:",",fJ7","8p<!t"]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test805.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)