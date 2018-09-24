





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7.889879335222838e+307] = 5.824517607577049e+306
argument3[25] = [714]
return a/b*c+d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.3938918493123786e+308] = {"":"k"}
argument4[0] = null
return a*b-c-d
};
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = {"82":"","403":627,"705":82,"":"n","<y7":2.4956351204206144e+307,"1.4074625167204224e+308":6.979968170188516e+307,"<":"",";+":8.576965715576447e+307,"2.836645049281506e+307":""}
base_2[1][0] = ["|D","$"]
return a*b+c-d
};
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[403] = {"":9.716970487322123e+307,"1.7976931348623157e+308":1.3484985230485392e+308,"B":49,"1.5568069340002274e+308":"","g":"","-":" G"}
argument10[2] = [403,"O",157,"u%3","O4[","I"]
argument10[595] = {}
return a+b/c+d
};
var argument9 = false;
var base_0 = [-100,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test555.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)