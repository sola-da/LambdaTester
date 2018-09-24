





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['A'] = ""
argument1[4] = -1
return a-b+c/d
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = null
argument4[1] = 7.218424608210077e+307
return a/b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[627][126] = false
return a-b/c/d
};
var argument6 = 9.707318970973336e+307;
var argument7 = r_1;
var argument8 = {"1.3560201843726079e+308":"","}":"","1.652610262717209e+308":"m","`":126,"1.0832776051723756e+308":4.71525728201211e+307,";{T":4.60477873131744e+307,"":1.6931205282561421e+308};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[59] = null
argument8[1] = ""
return a-b*c-d
};
var base_0 = [59,893,0,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,893,0,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,893,0,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,893,0,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test971.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)