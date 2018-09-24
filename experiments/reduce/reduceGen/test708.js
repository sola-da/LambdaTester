





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.463432409233234e+307] = [122,82,25,843,-100,100]
return a/b-c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ["D:","-","5","b","2T","feq","!0N^"]
return a/b+c/d
};
var argument3 = {"59":9.00959260501444e+307,"122":"nK","783":"G5&","893":893,"1.7109529707051216e+308":"QE","3.0576120106696604e+307":"f|#","":4.1855683517863663e+307,"9N":1.520580888847532e+308,"si":1.0689344404352544e+308};
var argument4 = r_1;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[595] = true
return a+b*c*d
};
var argument7 = null;
var argument8 = 9.422724886110632e+307;
var argument9 = [-100,460,403,460,403];
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = "7q"
argument8[3] = "s'l"
return a*b-c-d
};
var base_0 = ["Qm",",","J_","zG1","+","R?",">"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Qm",",","J_","zG1","+","R?",">"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Qm",",","J_","zG1","+","R?",">"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Qm",",","J_","zG1","+","R?",">"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test708.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)