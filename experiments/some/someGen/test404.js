





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f!BO'] = 25
base_0['length'] = "OI"
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[157] = true
return a*b*c
};
var argument3 = r_0;
var argument4 = 1.513762268290737e+308;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = true
return a/b/c
};
var argument6 = null;
var argument7 = {"":1.695260007347562e+308,"1.2359716885327098e+308":"","5.032879572738662e+307":"","1.7412203214946485e+307":1.4250811791542279e+308,"j9":"","XWp,":9.110373447880374e+307,"R":1.7343884967548735e+308,"5.098988776908469e+307":2.49948436304707e+307,"*":627};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = 783
return a+b/c
};
var base_0 = [":","w","{","k+","s$|",")","(","("]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":","w","{","k+","s$|",")","(","("]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":","w","{","k+","s$|",")","(","("]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":","w","{","k+","s$|",")","(","("]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test404.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)