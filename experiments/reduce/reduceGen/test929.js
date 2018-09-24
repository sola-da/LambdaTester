





var callbackArguments = [];
var argument1 = false;
var argument2 = r_0;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = [969,122,157,49]
argument3[5] = [618,25,783,59,618,627,460,49]
argument1[2] = true
return a/b*c/d
};
var argument5 = null;
var argument6 = r_0;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = {"0":"G2P"}
argument6[213] = {"242":5.590550877162513e+307,"714":"","":"^X%","9*":157,"}":1.7527802864603488e+308,")9u@":823}
return a/b-c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[-1] = true
argument11[7.889879335222838e+307] = 655
return a*b*c/d
};
var argument10 = 100;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14['HMm'] = true
return a*b+c*d
};
var argument13 = r_3;
var argument14 = null;
var base_0 = ["$","$","@W=",","]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$","$","@W=",","]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$","$","@W=",","]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$","$","@W=",","]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test929.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)