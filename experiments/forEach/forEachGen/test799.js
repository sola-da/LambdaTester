





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = null
base_0[3][0] = {"n":"Bq`E","1sB":"`","":-100}
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][8.05235215815219e+307] = true
argument4[1.3107131183454087e+308] = 655
argument4[2] = {"655":213,"1.3144771729280743e+307":"T"}
return a-b+c
};
var argument3 = r_1;
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][823] = 1.4535963141517498e+308
argument6[2] = null
return a-b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[403] = {"1.4543044519907014e+308":";","g3P":3.352095584702617e+307,"5.031665293636634e+307":"d^","n":"","":9.574497156736516e+307,"h'7o":"","5.18445935745601e+307":"","6.823972040444186e+307":"","5.487494693160808e+307":893,"K":1.4466798135038266e+308}
argument9[49] = [49,705,157,157]
base_3[5] = false
return a/b*c
};
var argument8 = true;
var argument9 = null;
var base_0 = ["i","{",49,705,"h",705,5e-324]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i","{",49,705,"h",705,5e-324]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i","{",49,705,"h",705,5e-324]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["i","{",49,705,"h",705,5e-324]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test799.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)