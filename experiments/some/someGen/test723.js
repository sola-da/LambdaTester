





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9] = {"705":"","3.1795959074961766e+306":"`m"}
return a-b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['f'] = {"25":"","157":"","618":2.2763690874078097e+307,"655":"","3.635782304459282e+307":460,"f":403,"1.4705228768393055e+308":6.210714326396875e+307,"1.5227272196334295e+308":"","":3.4314847501707147e+307}
base_1[5] = true
return a-b*c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = {"1.7617878707346043e+308":49,"9.997635651919104e+307":"","5e-324":"4"}
argument6[7] = false
return a-b-c
};
var argument6 = null;
var argument7 = "";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][1] = ""
argument9['f!BO'] = true
base_3[1][8] = "<"
return a/b+c
};
var argument9 = {"122":969,"126":"*","460":"6`","":"Gre","(":403,"2.569461118504639e+307":9.824495122211303e+307,"O":""};
var base_0 = [49,25,25,242,403,969,49,655,122,618]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,25,25,242,403,969,49,655,122,618]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,25,25,242,403,969,49,655,122,618]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,25,25,242,403,969,49,655,122,618]
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
require("fs").writeFileSync("./experiments/some/someGen/test723.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)