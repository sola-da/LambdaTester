





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9.551053197482062e+307] = 59
return a+b-c
};
var argument2 = {"705":655,"G I=8":893,"":"","1.1671513865001496e+308":2.0230180480992195e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"25":"ANtx8r","607":"`","627":122,"6.194828466303214e+307":"","'Z":-100,"1.7976931348623157e+308":7.438027642576908e+307,"":-1,"jK":-100,"*t":"%8","1.0908782473268105e+308":""}
argument4['a8r['] = false
argument3[0] = ""
return a/b-c
};
var argument4 = 1.077226011749339e+308;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4.224481734419934e+307] = ""
return a/b*c
};
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = ""
argument9[9] = 1.1070548893562456e+308
base_3[0][3] = ""
return a*b+c
};
var base_0 = [618,0,5e-324,-1,49,-100]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,0,5e-324,-1,49,-100]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,0,5e-324,-1,49,-100]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,0,5e-324,-1,49,-100]
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
require("fs").writeFileSync("./experiments/some/someGen/test863.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)